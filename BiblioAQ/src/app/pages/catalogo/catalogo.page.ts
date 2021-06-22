import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {CatalogoService} from '../../services/catalogo.service';
import {newArray} from '@angular/compiler/src/util';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit
{


  private catalogo$: Observable<Libro[]>;
  private arr$: any[];
  constructor(private catalogoService: CatalogoService,private route: ActivatedRoute) {}

  ngOnInit() {
       this.route.paramMap.subscribe((params: ParamMap) => {
       this.catalogo$ = this.catalogoService.findBybiblio(params.get('id'));
       });
  }
}
