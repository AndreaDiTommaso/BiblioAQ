import { Component, OnInit } from '@angular/core';
import {async, Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {LibroService} from '../../services/libro.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {URL, UTENTE_STORAGE} from '../../constants';
import {NavController} from "@ionic/angular";
import {UtenteService} from "../../services/utente.service";
import {Storage} from "@ionic/storage";
import {PreferitiService} from "../../services/preferiti.service";
import {Preferito} from "../../model/preferito.model";


@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  private path$ = `${URL.COPERTINE}/`;
  private libro$: Observable<Libro>;
  private copie$: number ;
  private islogged$: boolean;
  private utente$: string ;
  private id$: string;
  private preferito$: Observable<Preferito>;
  private bool: boolean;


  constructor(private navCtrl: NavController,
              private storage: Storage,
              private route: ActivatedRoute,
              private preferitiService: PreferitiService,
              private utenteService: UtenteService,
              private libroService: LibroService) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.libro$ = this.libroService.findByid(params.get('id'));
      this.id$ = params.get('id');
    });
    this.libro$.subscribe((params: Libro) => {
      this.copie$ = params.copie;
    });
    this.utenteService.isLogged().subscribe((params) => {
      this.islogged$ = params;
    });
    if (this.islogged$) {
      this.storage.get(UTENTE_STORAGE).then((value: string) => {
        this.utente$ = value['id'];
        this.checkpreferito();
        this.preferito$.subscribe((params) => {
          this.bool= params.check;
        });
        console.log(this.preferito$);
        console.log(this.bool);
      });


    }
  }
  aggiungiaipreferiti(libro){
    this.libro$=this.preferitiService.aggiungipreferito(this.utente$,libro);
    this.bool=true;
    //this.navCtrl.navigateRoot(['/libro',this.libro$]);
  }
  rimuovidaipreferiti(libro){
    this.libro$=this.preferitiService.rimuovipreferito(this.utente$,libro);
    this.bool=false;
   // this.navCtrl.navigateRoot(['/libro',this.libro$]);
  }
  checkpreferito(){
    this.preferito$=this.preferitiService.check(this.utente$,this.id$);


  }
  goback(){
    this.navCtrl.back() ;
  }

}







