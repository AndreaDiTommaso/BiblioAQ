import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Libro} from '../model/libro.model';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) {
  }
  findBybiblio(biblioId: string): Observable<Libro[]> {
    const params = new HttpParams().set('id', biblioId);
    const apiURL = `${URL.CATALOGO}/`;
    return this.http.get<Libro[]>(apiURL, {params});
  }
}
