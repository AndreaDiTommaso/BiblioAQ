import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Libro} from '../model/libro.model';
import { Observable } from'rxjs';
import {Preferito} from "../model/preferito.model";
import {Prenotazionelibro} from "../model/prenotazionelibro.model";

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {

  constructor(private http: HttpClient) {
  }
  findByid(biblioId: string): Observable<Libro> {
    const params = new HttpParams().set('id', biblioId);
    const apiURL = `${URL.LIBRO}/`;
    return this.http.get<Libro>(apiURL, {params});
  }


  aggiungipreferito(utente,libro): Observable<Libro>  {
    const params = {'utente': utente, 'libro': libro};
    const apiURL = `${URL.APREFERITO}/`;
    return this.http.get<Libro>(apiURL, {params});


  }
  rimuovipreferito(utente,libro): Observable<Libro>{
    const params = {'utente':utente,'libro':libro};
    const apiURL = `${URL.RPREFERITO}/`;
    return this.http.get<Libro>(apiURL, {params});
  };

check(utente,libro): Observable<Preferito>{
  const params = {'utente':utente,'libro':libro};
  const apiURL = `${URL.CPREFERITO}/`;
  return this.http.get<Preferito>(apiURL, {params});
}


}

