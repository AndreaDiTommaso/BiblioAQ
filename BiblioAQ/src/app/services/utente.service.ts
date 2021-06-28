import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


import {Utente} from '../model/utente.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {AUTH_TOKEN, UTENTE_STORAGE, X_AUTH, URL} from '../constants';
import {map} from 'rxjs/operators';


export interface Account {
  nome: string;
  cognome: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private authToken: string;
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private utente$: BehaviorSubject<Utente> = new BehaviorSubject<Utente>({} as Utente);

  /*constructor(private http: HttpClient, private storage: Storage) {

    this.storage.get(AUTH_TOKEN).then((token) => {
      console.log(token);
      this.authToken = token;
      if (token !== null && token !== undefined && token !== '') {
        this.loggedIn$.next(true);
      }
    });
    this.storage.get(UTENTE_STORAGE).then((utente) => {
      this.utente$.next(utente);
    });

  }*/

  constructor(private http: HttpClient, private storage: Storage){
  }

  signup(account: Account): Observable<any> {
    return this.http.post<any>(URL.SIGNUP, account, {observe: 'response'}).pipe(
      map((resp: HttpResponse<any>) => resp.body
      )
    );
  }
  login(account: Account): Observable<Utente> {
    return this.http.post<any>(URL.LOGIN, account, {observe: 'response'}).pipe(
      map((resp: HttpResponse<any>) => {
        const token = resp.body.get('jwt');
        this.storage.set(AUTH_TOKEN, token);
        this.authToken = token;
        // Utente memorizzato nello storage in modo tale che se si vuole cambiare il
        // profilo dell'utente stesso non si fa una chiamata REST.
        this.storage.set(UTENTE_STORAGE, resp.body.get('utente'));
        // update dell'observable dell'utente
        this.utente$.next(resp.body);
        this.loggedIn$.next(true);
        return resp.body;
      }));
  }
}
