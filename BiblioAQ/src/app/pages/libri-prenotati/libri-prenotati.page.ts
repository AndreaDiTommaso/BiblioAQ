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
private libro$;
private titolo$;
private autore$;
 private argomento$='libri';

  constructor(
    private storage: Storage,
    private pls: PrenotazionilibriService,
    private libroService: LibroService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.utente$=params.get('id');
    });
    this.prenotazionilibri$=this.pls.findByutente(this.utente$);
    this.libri$= this.libroService.readbyutente(this.utente$);

  }
  segmentChanged(ev: any) {
    this.argomento$=ev.target.value;
    console.log(ev.target.value);
  }
}
