import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/app/model/biblioteca.model';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-biblioteche',
  templateUrl: './biblioteche.page.html',
  styleUrls: ['./biblioteche.page.scss'],
})
export class BibliotechePage implements OnInit {

  private biblioteche: Observable<Biblioteca[]>;

  constructor(private bibliotecaService: BibliotecaService,) {}

  ngOnInit() {
    this.biblioteche = this.bibliotecaService.list();
  }
}
