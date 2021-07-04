import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Libro} from '../model/libro.model';
import {Prenotazionelibro} from "../model/prenotazionelibro.model";
import { Observable } from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrenotazionilibriService{

  constructor(private http: HttpClient) {
  }
/*  findByid(biblioId: string): Observable<Libro> {
    const params = new HttpParams().set('id', biblioId);
    const apiURL = `${URL.LIBRO}/`;
    return this.http.get<Libro>(apiURL, {params});
  }

 */
  findByutente(utenteId: string): Observable<Prenotazionelibro[]> {
     const params = new HttpParams().set('utente', utenteId);
     const apiURL = `${URL.PL}/`;
     return this.http.get<Prenotazionelibro[]>(apiURL, {params});
  }




}
