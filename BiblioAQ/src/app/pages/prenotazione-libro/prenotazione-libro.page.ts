import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Libro} from '../../model/libro.model';

import {Observable, observable} from "rxjs";
import {LibroService} from "../../services/libro.service";
@Component({
  selector: 'app-prenotazione-libro',
  templateUrl: './prenotazione-libro.page.html',
  styleUrls: ['./prenotazione-libro.page.scss'],
})
export class PrenotazioneLibroPage implements OnInit {
   private libro$: Observable<Libro>;
   private copie$;

  constructor(private route: ActivatedRoute,private libroService: LibroService) { }

  ngOnInit() {

      this.route.paramMap.subscribe((params: ParamMap) => {
        this.libro$ = this.libroService.prenota(params.get('id'));
      });
      this.libro$.subscribe((params: Libro) => {
      this.copie$ = params.copie;
      });

  }

}
