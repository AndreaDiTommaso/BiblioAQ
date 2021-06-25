import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Libro} from '../../model/libro.model';

import {Observable} from "rxjs";
import {LibroService} from "../../services/libro.service";
import {Biblioteca} from "../../model/biblioteca.model";
import {BibliotecaService} from "../../services/biblioteca.service";
@Component({
  selector: 'app-prenotazione-libro',
  templateUrl: './prenotazione-libro.page.html',
  styleUrls: ['./prenotazione-libro.page.scss'],
})
export class PrenotazioneLibroPage implements OnInit {
   private libro$: Observable<Libro>;
   private biblioteca$: Observable<Biblioteca[]>;
   private copie$;
   private nomebiblio$;

  constructor( private bibliotecaService: BibliotecaService,private route: ActivatedRoute,private libroService: LibroService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
        this.libro$ = this.libroService.findByid(params.get('id'));
    });

    this.libro$.subscribe((params: Libro) => {this.copie$ = params.copie;});



  }
  recuperodata(){
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var string= mm + '/' + dd + '/' + yyyy;
    return string;
  }

}
