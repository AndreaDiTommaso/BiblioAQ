import { Component, OnInit } from '@angular/core';
import {UtenteService} from "../../services/utente.service";
import {PreferitiService} from "../../services/preferiti.service";
import {LibroService} from "../../services/libro.service";
import {Observable} from "rxjs";
import {Libro} from "../../model/libro.model";
import {tap} from "rxjs/internal/operators/tap";


@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage implements OnInit {
private utente$;
private idutente$;
private libri$: Observable<Libro[]>;
  constructor(
    private utenteService: UtenteService,
    private libroService: LibroService


  ) { }

   ngOnInit() {
    this.utenteService.getUtente().subscribe((utente) => {

      this.utente$ = utente;
      this.idutente$= utente.id;
    });

    this.libri$= this.libroService.readpreferiti(this.idutente$);

  }
  doRefresh(event) {
    this.libri$= this.libroService.readpreferiti(this.idutente$)
      .pipe(tap(() => {
        event.target.complete();
      }));
  }

}
