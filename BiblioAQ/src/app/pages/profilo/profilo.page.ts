import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/services/utente.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {

  constructor(private utenteService: UtenteService,
              private navController: NavController) { }

  ngOnInit() {

  }

  onLogOut(){
    this.utenteService.logout();
    this.navController.navigateRoot('/menu');

  }
  goback(){
    this.navController.navigateRoot('/menu');
  }

}
