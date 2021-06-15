import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  constructor(public  alertController: AlertController) { }

  ngOnInit() {
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


}







