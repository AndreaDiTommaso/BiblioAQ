import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Biblioteca } from '../model/biblioteca.model';
import { Observable } from'rxjs';

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
  prenota(biblioId): Observable<Biblioteca[]>{
    const params = new HttpParams().set('id', biblioId);
    const apiURL = `${URL.BIBLIOTECAP}/`;
    return this.http.get<Biblioteca[]>(apiURL, {params});

  }
}
