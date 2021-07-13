import { Component, OnInit } from '@angular/core';
import {UtenteService} from "../../services/utente.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
private islogged$:boolean;
  constructor(private utenteService: UtenteService) { }

  ngOnInit() {
    this.utenteService.isLogged().subscribe((params) => {
      this.islogged$= params;
    });


  }
  logout(){
    this.utenteService.logout();
  }

}
