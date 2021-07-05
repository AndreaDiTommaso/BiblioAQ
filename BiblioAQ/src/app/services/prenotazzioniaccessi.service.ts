import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Biblioteca} from '../model/biblioteca.model';
import {Prenotazioneaccessi} from '../model/prenotazioneaccesso.model';
import { Observable } from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrenotazioniaccessiService{

  constructor(private http: HttpClient) {
  }
  /*  findByid(biblioId: string): Observable<Libro> {
      const params = new HttpParams().set('id', biblioId);
      const apiURL = `${URL.LIBRO}/`;
      return this.http.get<Libro>(apiURL, {params});
    }

   */
  findByutente(utenteId: string): Observable<Prenotazioneaccessi[]> {
    const params = new HttpParams().set('utente', utenteId);
    const apiURL = `${URL.PA}/`;
    return this.http.get<Prenotazioneaccessi[]>(apiURL, {params});
  }




}
