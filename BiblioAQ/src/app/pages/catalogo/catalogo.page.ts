import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {CatalogoService} from '../../services/catalogo.service';
import {tap} from 'rxjs/internal/operators/tap';
import {IonRefresher} from "@ionic/angular";
import {newArray} from '@angular/compiler/src/util';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit
{

  private nomebiblioteca$;
  private idbiblioteca$;
  private catalogo$: Observable<Libro[]>;
  constructor(private catalogoService: CatalogoService,private route: ActivatedRoute) {}

  ngOnInit() {
       this.route.paramMap.subscribe((params: ParamMap) => {
         this.idbiblioteca$=params.get('id');
         this.nomebiblioteca$ =  params.get('nome');
       });
       this.catalogo$ = this.catalogoService.findBybiblio(this.idbiblioteca$);
  }
  doRefresh(event) {
      this.catalogo$ = this.catalogoService.findBybiblio(this.idbiblioteca$)
          .pipe(tap(() => {
         event.target.complete();
      }));
      setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  }
}
