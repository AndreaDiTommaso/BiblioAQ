import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Account} from '../../services/utente.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: Account = { email: '', password: ''};
  submitted = false;

  constructor(
    private alertController: AlertController,
    private navController: NavController
  ) { }

  onLogin(form: NgForm){
    this.submitted = true;

    if (form.valid) {
    }
  }

  onSignup() {
    this.navController.navigateRoot('menu');
  }
ngOnInit() {
  }

}
