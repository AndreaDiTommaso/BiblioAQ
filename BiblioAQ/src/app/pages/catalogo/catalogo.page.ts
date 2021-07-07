import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {CatalogoService} from '../../services/catalogo.service';
import {tap} from 'rxjs/internal/operators/tap';
import {IonRefresher, NavController} from '@ionic/angular';
import {newArray} from '@angular/compiler/src/util';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit
{

  private nomebiblioteca$: string;
  private idbiblioteca$;
  private catalogo$: Observable<Libro[]>;
  private filtra$=false;
  private ricercapertitolo$: string;
  private ricercaperautore$: string;
  private ricercapergenere$: string;
  private ricerca$ = 'titolo';
  constructor(private navCtrl: NavController,private catalogoService: CatalogoService,private route: ActivatedRoute) {}

  ngOnInit() {
       this.route.paramMap.subscribe((params: ParamMap) => {
         this.idbiblioteca$=params.get('id');
         //this.idbiblioteca$=params;
         this.nomebiblioteca$ =  params.get('nome');
       });
       this.catalogo$ = this.catalogoService.findBybiblio(this.idbiblioteca$);
  }
  doRefresh(event) {
      this.catalogo$ = this.catalogoService.findBybiblio(this.idbiblioteca$)
          .pipe(tap(() => {
         event.target.complete();
      }));
  }
  getItems(event) {
    if (event.target.value!==''){
      this.filtra$=true;
      if(this.ricerca$==='titolo')
      {this.ricercapertitolo$=String(event.target.value).toLowerCase();
        this.ricercaperautore$=null;
        this.ricercapergenere$=null;

      }
      if(this.ricerca$==='autore')
      {this.ricercaperautore$=String(event.target.value).toLowerCase();
        this.ricercapertitolo$=null;
        this.ricercapergenere$=null;
      }

      if(this.ricerca$==='genere')
      {this.ricercapergenere$=String(event.target.value).toLowerCase();
        this.ricercaperautore$=null;
        this.ricercapertitolo$=null;
      }
    }
    else{this.filtra$=false;}


  }
  goback(){
    this.navCtrl.back();
  }
setfiltro(value){
    this.ricerca$=value;
}
}
