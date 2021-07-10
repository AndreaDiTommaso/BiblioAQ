import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import { Account, UtenteService } from 'src/app/services/utente.service';
import { HttpErrorResponse } from '@angular/common/http';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})


export class RegistrazionePage implements OnInit {

  private signupFormModel: FormGroup;
  private mex: string;

  constructor(private formBuilder: FormBuilder,
              private utenteService: UtenteService,
              private navController: NavController,
              private translateService: TranslateService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.signupFormModel = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
      ])],
      cognome: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  signup(){
    const account: Account = this.signupFormModel.value;
    this.utenteService.signup(account).subscribe((data) => {
        this.translateService.get('USER_SUCC').subscribe((data) => {
          this.mex = data;
        });
      this.showAllert();
      this.navController.navigateRoot('/menu')
      },
      (err: HttpErrorResponse) => {

        if(err.status === 406){
          this.translateService.get('EMAIL_ERROR').subscribe((data) => {
            this.mex = data;
          });
          this.showAllert();
        }
        else{
          if(err.status === 400){
            this.translateService.get('USER_ERROR').subscribe((data) => {
              this.mex = data;
            });
            this.showAllert();
          }
        }
      }
    );
  }

  async showAllert() {
    const alert = await this.alertController.create({
      message: this.mex,
      buttons: ['OK']
    });

    await alert.present();
  }

  goback(){
    this.navController.back() ;
  }
}
