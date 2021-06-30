import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BibliotecaService} from '../../services/biblioteca.service';
import {Observable} from 'rxjs';
import {Biblioteca} from '../../model/biblioteca.model';
import {NavController} from '@ionic/angular';
import {URL} from '../../constants';
@Component({
  selector: 'app-prenotazione-accesso',
  templateUrl: './prenotazione-accesso.page.html',
  styleUrls: ['./prenotazione-accesso.page.scss'],
})
export class PrenotazioneAccessoPage implements OnInit {
  private biblioteca$: Observable<Biblioteca[]>;

  private event = {
    giorno:'',
    ora:''

  };
  private nome$;
  private posti$;
  private indirizzo$;
  private id$;

  constructor(private navCtrl: NavController,private bibliotecaService: BibliotecaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.biblioteca$ = this.bibliotecaService.findById(String(params.get('id')));
        this.id$=params.get('id');
        this.nome$=params.get('nome');
        this.posti$=params.get('posti');
        this.indirizzo$=params.get('indirizzo');
    });
      this.event.giorno=this.recuperodata();
      this.event.ora=this.recuperoora();
  }

  recuperodata(){
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var string= yyyy + '-' + mm + '-' + dd;
    return string;
  }
  recuperoora(){
    var today=new Date();
    var ore = String(today.getHours()).padStart(2, '0');
    var minuti = String(today.getMonth()).padStart(2, '0');
    var string= ore + ':' + minuti;
    return string;
  }


  goback(){
    this.navCtrl.back();
  }
  prenota(){
    this.biblioteca$=this.bibliotecaService.prenota(this.id$);

  }
}
