import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
