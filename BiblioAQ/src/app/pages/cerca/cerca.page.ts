import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {CatalogoService} from '../../services/catalogo.service';
import { NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.page.html',
  styleUrls: ['./cerca.page.scss'],
})
export class CercaPage implements OnInit {

  private catalogo$: Observable<Libro[]>;
  private filtra$=false;
  private ricercapertitolo$: string;
  private ricercaperautore$: string;
  private ricercapergenere$: string;
  private ricerca$ = "titolo";
  private placeholder: string;

  constructor(private navCtrl: NavController,
              private catalogoService: CatalogoService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.catalogo$ = this.catalogoService.findAll();

    this.translateService.get('SEARCH').subscribe((data) => {
      this.placeholder  = data;
    });
  }

  getItems(event) {
    if (event.target.value!==''){
      this.filtra$=true;
      if(this.ricerca$==='titolo'  )
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
