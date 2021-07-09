import { Component, OnInit } from '@angular/core';
import {Lingua, LinguaService} from "../../services/lingua.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Utente} from '../../model/utente.model';
import {TranslateService} from "@ngx-translate/core";
import {UtenteService} from "../../services/utente.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  private lingue: Lingua[];
  private profiloFormModel: FormGroup;
  private utente: Utente;


  constructor(private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private linguaService: LinguaService,
              private utenteService: UtenteService,
              private navController: NavController,
  ) {
  }

  ngOnInit() {
    this.lingue = this.linguaService.getLingue();
    this.profiloFormModel = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      linguaPreferita: ['', Validators.compose([
        Validators.required
      ])]
    });
    this.linguaService.getLinguaAttuale().subscribe((lingua) => {
      this.profiloFormModel.patchValue({linguaPreferita: lingua});
    });
    this.utenteService.getUtente().subscribe((utente) => {
      this.profiloFormModel.patchValue({email: utente.email});
      this.utente = utente;
    });
  }

  onSubmit(): void {
    this.translateService.use(this.profiloFormModel.value.linguaPreferita);
    this.linguaService.updateLingua(this.profiloFormModel.value.linguaPreferita);
    this.utente.email = this.profiloFormModel.value.email;
    //this.utenteService.updateProfilo(this.utente).subscribe((nuovoUtente: Utente) => {
    // this.navController.back();
    //});
  }


  onLogOut(){
    this.utenteService.logout();
    this.navController.navigateRoot('/menu');

  }
  goback(){
    this.navController.back() ;
  }

}
