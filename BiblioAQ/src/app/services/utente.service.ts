import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


import {Utente} from '../model/utente.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {AUTH_TOKEN, UTENTE_STORAGE, X_AUTH} from '../constants';


export interface Account {
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

  constructor(private http: HttpClient, private storage: Storage) {

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

  }

}
