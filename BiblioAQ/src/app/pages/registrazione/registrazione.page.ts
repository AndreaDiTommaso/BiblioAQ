import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Biblioteca} from '../../model/biblioteca.model';
import {Utente} from '../../model/utente.model';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})


export class RegistrazionePage implements OnInit {

  private utente$: Observable<Utente>;

  constructor() { }

  ngOnInit() {
  }

}
