import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Biblioteca} from '../../model/biblioteca.model';
import {BibliotecaService} from '../../services/biblioteca.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';




@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  private biblioteche: Observable<Biblioteca[]>;

  constructor(private bibliotecaService: BibliotecaService) {}




  ngOnInit() {
    this.biblioteche = this.bibliotecaService.list();
  }
}
