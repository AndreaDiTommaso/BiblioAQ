import { Component, OnInit } from '@angular/core';
import {BibliotecaService} from "../../services/biblioteca.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Biblioteca} from "../../model/biblioteca.model";
import {UTENTE_STORAGE} from "../../constants";
import {Storage} from "@ionic/storage";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.page.html',
  styleUrls: ['./accesso.page.scss'],
})
export class AccessoPage implements OnInit {
  private biblioteca$: Observable<Biblioteca[]>;
  private id$;
  private event = {
    giorno:''

  };
  private data$;
  private utente$;
  private posti$;
  constructor(private navCtrl: NavController,private storage: Storage,private route: ActivatedRoute,private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.biblioteca$ = this.bibliotecaService.findById(String(params.get('id')));});

    this.biblioteca$.subscribe((params: Biblioteca[]) => {
      this.id$ = params[0].id;});
    this.event.giorno=this.recuperodata();
    const check=this.aggiornaposti();
    this.storage.get(UTENTE_STORAGE).then((value: string)=>{
      this.utente$=String(value['id']);
    });

  }
  prenota(){
    this.biblioteca$ = this.bibliotecaService.accesso(this.id$,this.data$,this.utente$);

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
    return true;
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
}
