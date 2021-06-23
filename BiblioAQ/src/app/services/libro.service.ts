import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { URL } from '../constants';
import { Libro} from '../model/libro.model';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {
  }
  findByid(biblioId: string): Observable<Libro[]> {
    const params = new HttpParams().set('id', biblioId);
    const apiURL = `${URL.LIBRO}/`;
    return this.http.get<Libro[]>(apiURL, {params});
  }
  prenota($id){
    const params = new HttpParams().set('id', $id);
    const apiURL = `${URL.LIBROP}/`;
    return this.http.get<string>(apiURL, {params});
  }
}
