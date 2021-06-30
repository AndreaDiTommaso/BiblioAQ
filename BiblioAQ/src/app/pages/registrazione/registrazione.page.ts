import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {Biblioteca} from '../../model/biblioteca.model';
import {Utente} from '../../model/utente.model';
import { Account, UtenteService } from 'src/app/services/utente.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})


export class RegistrazionePage implements OnInit {

  private signupFormModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private utenteService: UtenteService) { }

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
        alert('utente creato!');

      },
      (err: HttpErrorResponse) => {

        if(err.status === 406){
          alert ('email già esistente');
        }

        if(err.status === 400){
          alert ('impossibile create utente');
        }
      }
    );
  }

}
