import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {LibroService} from '../../services/libro.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { URL } from '../../constants';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  private path$ = `${URL.COPERTINE}/`;
  private libro$: Observable<Libro[]>;
  private copie$;
  private $boh;

  constructor(public  alertController: AlertController,private route: ActivatedRoute,private libroService: LibroService) { }
  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.libro$ = this.libroService.findByid(params.get('id'));
    });
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.copie$ = params.get('copie');
    });
  }
  async showAlert() {
    const alert = await this.alertController.create({

      message: 'prenotazione effettuata con successo.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  prenota($id){
    this.libroService.prenota($id);
    this.showAlert();
  }

}







