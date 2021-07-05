import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Biblioteca } from '../model/biblioteca.model';
import { Observable } from'rxjs';
import {Libro} from "../model/libro.model";

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(URL.BIBLIOTECHE);
  }

  findById(biblioId: string): Observable<Biblioteca[]> {
      const params = new HttpParams().set('id', biblioId);
      const apiURL = `${URL.BIBLIOTECA}/`;
      return this.http.get<Biblioteca[]>(apiURL, {params});
  }
  posti($biblio,$data){
    const params = {'id':$biblio,'data':$data};
    const apiURL = `${URL.POSTI}/`;
    return this.http.get(apiURL, {params});
  }

 accesso(biblio,data,utente): Observable<Biblioteca[]>{
   const params = {'biblioteca':biblio,'data':data,'utente':utente};
   const apiURL = `${URL.BIBLIOTECAP}/`;
    return this.http.get<Biblioteca[]>(apiURL,{params});}
  readbyutente(utente): Observable<Biblioteca[]>{
    const params = {'utente':utente};
    const apiURL = `${URL.ACCESSIPRENOTATI}/`;
    return this.http.get<Biblioteca[]>(apiURL, {params});}
}
