import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Libro} from '../../model/libro.model';
import {AlertController} from '@ionic/angular';
import {Observable} from "rxjs";
import {LibroService} from "../../services/libro.service";
import{Router} from "@angular/router";
import {BibliotecaService} from "../../services/biblioteca.service";
import {CatalogoService} from "../../services/catalogo.service";
@Component({
  selector: 'app-prenotazione-libro',
  templateUrl: './prenotazione-libro.page.html',
  styleUrls: ['./prenotazione-libro.page.scss'],
})
export class PrenotazioneLibroPage implements OnInit {
   private libro$: Observable<Libro>;
   private copie$;
   private id$;
   private idbiblio$;
   private scadenza$;

  constructor(private catalogoService: CatalogoService, private _router:Router,private  alertController: AlertController, private bibliotecaService: BibliotecaService,private route: ActivatedRoute,private libroService: LibroService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
        this.libro$ = this.libroService.findByid(params.get('id'));
    });

    this.libro$.subscribe((params: Libro) => {
      this.copie$ = params.copie;
      this.id$ = params.id;
      this.idbiblio$=params.idbiblioteca;
    });




  }
  recuperodata(){
    var today=new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var string= dd + '/' + mm + '/' + yyyy;
    dd = String(parseInt(String(today.getDate()))+3).padStart(2, '0');
    this.scadenza$=dd + '/' + mm + '/' + yyyy;
    return string;

  }
  prenota(){
    this.libro$=this.libroService.prenota(this.id$);
    this.showAlert();
    //this._router.navigate(['/catalogo'],this.catalogoService.findBybiblio(this.idbiblio$).subscribe());
  }
  async showAlert() {
    const alert = await this.alertController.create({


      message: 'prenotazione effettuata con successo.',
      buttons: [
        {
          text:'Torna al menù',
          handler: () => {
            this._router.navigate(['/menu']);
          }
        }],
      backdropDismiss: false

    });

    await alert.present();

    //const { role } = await alert.onDidDismiss();

  }

}
