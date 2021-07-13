import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {CatalogoService} from '../../services/catalogo.service';
import {tap} from 'rxjs/internal/operators/tap';
import {IonRefresher, NavController} from '@ionic/angular';
import {BibliotecaService} from '../../services/biblioteca.service';
import {Biblioteca} from '../../model/biblioteca.model';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.page.html',
  styleUrls: ['./cerca.page.scss'],
})
export class CercaPage implements OnInit {

  private idbiblioteca$;
  private catalogo$: Observable<Libro[]>;
  private filtra$=false;
  private ricercapertitolo$: string;
  private ricercaperautore$: string;
  private ricercapergenere$: string;
  private ricerca$: string;
  private placeholder: string;

  constructor(private navCtrl: NavController,
              private catalogoService: CatalogoService,
              private translateService: TranslateService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.catalogo$ = this.catalogoService.findAll();
    this.translateService.get('TITLE').subscribe((data) => {
      this.ricerca$  = data;
    });
    this.translateService.get('SEARCH').subscribe((data) => {
      this.placeholder  = data;
    });
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
