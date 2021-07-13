import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Libro} from '../../model/libro.model';
import {AlertController, NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {LibroService} from '../../services/libro.service';
import{Router} from '@angular/router';
import {BibliotecaService} from '../../services/biblioteca.service';
import {CatalogoService} from '../../services/catalogo.service';
import {UTENTE_STORAGE} from '../../constants';
import {Storage} from '@ionic/storage';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-prenotazione-libro',
  templateUrl: './prenotazione-libro.page.html',
  styleUrls: ['./prenotazione-libro.page.scss'],
})
export class PrenotazioneLibroPage implements OnInit {
   private libro$: Observable<Libro>;
   private copie$: number;
   private id$: number;
   private idbiblio$: number;
   private utente$: string;
   private message$: string;

   constructor( private storage: Storage,
                private navCtrl: NavController,
                private  catalogoService: CatalogoService,
                private _router:Router,
                private  alertController: AlertController,
                private bibliotecaService: BibliotecaService,
                private route: ActivatedRoute,
                private translateService: TranslateService,
                private libroService: LibroService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
        this.libro$ = this.libroService.findByid(params.get('id'));
    });

    this.libro$.subscribe((params: Libro) => {
      this.copie$ = params.copie;
      this.id$ = params.id;
      this.idbiblio$=params.idbiblioteca;
    });
    this.storage.get(UTENTE_STORAGE).then((value: string)=>{
      this.utente$=String(value['id']);

    });
    this.translateService.get('PREN_SUCCESSO').subscribe((data) => {
      this.message$  = data;
    });


  }
  recuperodata(){
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var string= dd + '/' + mm + '/' + yyyy;
    return string;

  }
  prenota(){
    const string=this.recuperodata().replace('/', '').replace('/', '');
    this.libro$=this.libroService.prenota(this.id$,this.utente$,string);
    this.showAlert();

  }
  async showAlert() {
    const alert = await this.alertController.create({


      message: this.message$,
      buttons: [
        {
          text:'OK',
          handler: () => {
            this._router.navigate(['/menu']);
          }
        }],
      backdropDismiss: false

    });

    await alert.present();


  }
  goback(){
    this.navCtrl.back();
  }

}
