import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

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


  constructor(private http: HttpClient, private storage:  Storage){}

  signup(account: Account): Observable<any> {
   return this.http.post<any>(URL.SIGNUP, account, {observe: 'response'}).pipe(
      map((resp: HttpResponse<any>) => {
        const token = resp.body.jwt;
        //this.storage.create();
        this.storage.set(AUTH_TOKEN, token);
        this.storage.set(UTENTE_STORAGE, resp.body.utente);
        this.utente$.next(resp.body.utente);
        this.loggedIn$.next(true);
        this.storage.get(AUTH_TOKEN).then((value: any) => {
          alert(value);});
        return resp.body;}));


  }
  login(account: Account): Observable<Utente> {
    return this.http.post<any>(URL.LOGIN, account, {observe: 'response'}).pipe(
      map((resp: HttpResponse<any>) => {
        const token = resp.body.jwt;
        this.storage.create();
        this.storage.set(AUTH_TOKEN, token);
        this.storage.set(UTENTE_STORAGE, resp.body.utente);
        this.utente$.next(resp.body.utente);
        this.loggedIn$.next(true);
        return resp.body;
      }));
  }

  logout() {
    this.authToken = null;
    this.loggedIn$.next(false);
    this.storage.remove(AUTH_TOKEN);
    this.storage.remove(UTENTE_STORAGE);

    // Nessuna chiamata al server perche' JWT e' stateless quindi non prevede alcun logout.
    // Per gestirlo si dovrebbe fare lato server una blacklist.
  }

  getUtente(): BehaviorSubject<Utente> {
    return this.utente$;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  isLogged(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  /*updateProfilo(nuovoUtente: Utente): Observable<Utente> {
    return this.http.post<Utente>(URL.UPDATE_PROFILO, nuovoUtente, {observe: 'response'}).pipe(
      map((resp: HttpResponse<Utente>) => {
        // Aggiornamento dell'utente nello storage.
        // Utente memorizzato nello storage per evitare chiamata REST quando si vuole modificare il profilo
        // e se l'utente chiude la app e la riapre i dati sono gia' presenti
        this.storage.set(UTENTE_STORAGE, resp.body);
        // update dell'observable dell'utente
        this.utente$.next(resp.body);
        return resp.body;
      }));
      }*/
}
