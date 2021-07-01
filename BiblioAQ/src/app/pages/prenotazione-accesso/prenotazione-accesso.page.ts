import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BibliotecaService} from '../../services/biblioteca.service';
import {Observable} from 'rxjs';
import {Biblioteca} from '../../model/biblioteca.model';
import {NavController} from '@ionic/angular';
import {Storage} from "@ionic/storage";
import {URL, UTENTE_STORAGE} from '../../constants';
import {Libro} from "../../model/libro.model";
@Component({
  selector: 'app-prenotazione-accesso',
  templateUrl: './prenotazione-accesso.page.html',
  styleUrls: ['./prenotazione-accesso.page.scss'],
})
export class PrenotazioneAccessoPage implements OnInit {
  private biblioteca$: Observable<Biblioteca[]>;

  private event = {
    giorno:''

  };
  private nome$;
  private posti$;
  private indirizzo$;
  private id$;
  private data$;
  private utente$;

  constructor(private storage: Storage,private navCtrl: NavController,private bibliotecaService: BibliotecaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.biblioteca$ = this.bibliotecaService.findById(String(params.get('id')));
        this.id$=params.get('id');
        this.nome$=params.get('nome');
        this.indirizzo$=params.get('indirizzo');
    });
      this.event.giorno=this.recuperodata();
      this.aggiornaposti();
      this.storage.get(UTENTE_STORAGE).then((value: string)=>{
      this.utente$=String(value['id']);
    });

  }
aggiornaposti(){
  var data= this.event.giorno.substring(0,10);
  data=data.replace('-', '').replace('-', '');
  var dd = data.substr(6,2);
  var mm = data.substr(4,2);
  var yyyy = data.substr(0,4);
  this.data$= dd +  mm  + yyyy;
  const obs=this.bibliotecaService.posti(this.id$,this.data$);
  obs.subscribe((params: any ) => {this.posti$ = params.posti;});
}
  recuperodata(){
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var string= yyyy + '-' + mm + '-' + dd;
    return string;
  }



  goback(){
    this.navCtrl.back();
  }
  prenota(){
    const obs =this.bibliotecaService.prenota(this.id$,this.data$,this.utente$);
    console.log(obs);

  }
}
