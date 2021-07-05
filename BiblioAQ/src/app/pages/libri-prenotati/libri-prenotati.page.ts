import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {CatalogoService} from "../../services/catalogo.service";
import {UTENTE_STORAGE} from "../../constants";
import {Storage} from "@ionic/storage";
import {LibroService} from "../../services/libro.service";
import {PrenotazionilibriService} from "../../services/prenotazionilibri.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Prenotazionelibro} from "../../model/prenotazionelibro.model";
import {Libro} from "../../model/libro.model";
import {Observable} from "rxjs";
import {Prenotazioneaccessi} from "../../model/prenotazioneaccesso.model";
import {PrenotazioniaccessiService} from "../../services/prenotazzioniaccessi.service";
import {BibliotecaService} from "../../services/biblioteca.service";
import {Biblioteca} from "../../model/biblioteca.model";

// noinspection JSPotentiallyInvalidUsageOfClassThis
@Component({
  selector: 'app-libri-prenotati',
  templateUrl: './libri-prenotati.page.html',
  styleUrls: ['./libri-prenotati.page.scss'],
})
export class LibriPrenotatiPage implements OnInit {
private utente$;
private prenotazionilibri$: Observable<Prenotazionelibro[]>;
private libri$: Observable<Libro[]>;
private prenotazioniaccessi$: Observable<Prenotazioneaccessi[]>;
private argomento$='libri';
private biblioteche$: Observable<Biblioteca[]>;

  constructor(
    private storage: Storage,
    private pls: PrenotazionilibriService,
    private pas: PrenotazioniaccessiService,
    private libroService: LibroService,
    private bibliotecaService: BibliotecaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.utente$=params.get('id');
    });
    this.prenotazionilibri$=this.pls.findByutente(this.utente$);
    this.libri$= this.libroService.readbyutente(this.utente$);
    this.prenotazioniaccessi$=this.pas.findByutente(this.utente$);
    this.biblioteche$= this.bibliotecaService.readbyutente(this.utente$);
  }
  segmentChanged(ev: any) {
    this.argomento$=ev.target.value;
    console.log(ev.target.value);
  }
  modificadata(data){
   if(data.length===8){
     var dd = data.substr(0,2);
     var mm = data.substr(2,2);
     var yyyy = data.substr(4,4);
   }
   else{
     var dd = data.substr(0,1);
     var mm = data.substr(1,2);
     var yyyy = data.substr(3,4);
   }
   return dd + '/' +  mm + '/' + yyyy;

  }

}
