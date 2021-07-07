import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Libro} from '../model/libro.model';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {
  }
  findByid(biblioId: string): Observable<Libro> {
    const params = new HttpParams().set('id', biblioId);
    const apiURL = `${URL.LIBRO}/`;
    return this.http.get<Libro>(apiURL, {params});
  }
 /* findByutente(utenteId: string): Observable<libro[]> {
    const params = new HttpParams().set('utente', utenteId);
    const apiURL = `${URL.LIBRO}/`;
    const prenotazioni = this.http.get<Prenotazionelibro[]>(apiURL, {params});


  }

  */
  prenota(libro,utente,data){

    const params = {'libro':libro,'utente':utente,'data':data};
    const apiURL = `${URL.LIBROP}/`;
    return this.http.get<Libro>(apiURL, {params});}

  readbyutente(utente): Observable<Libro[]>{
    const params = {'utente':utente};
    const apiURL = `${URL.LIBRIPRENOTATI}/`;
    return this.http.get<Libro[]>(apiURL, {params});}





}

