import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/app/model/biblioteca.model';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NavController} from '@ionic/angular';
import {URL} from '../../constants';


@Component({
  selector: 'app-biblioteche',
  templateUrl: './biblioteche.page.html',
  styleUrls: ['./biblioteche.page.scss'],
})
export class BibliotechePage implements OnInit {

  private biblioteca$: Observable<Biblioteca[]>;
  private path$ = `${URL.IMMAGINI}/`;
  constructor(private navCtrl: NavController,private bibliotecaService: BibliotecaService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.biblioteca$ = this.bibliotecaService.findById(params.get('id'));
    });
  }
  goback(){
    this.navCtrl.back();
  }
}
