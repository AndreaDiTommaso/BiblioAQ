import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Libro} from '../../model/libro.model';
import {LibroService} from '../../services/libro.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { URL } from '../../constants';
import {NavController} from "@ionic/angular";



@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  private path$ = `${URL.COPERTINE}/`;
  private libro$: Observable<Libro>;
  private copie$;



  constructor(private storage: Storage,private navCtrl: NavController,private route: ActivatedRoute,private libroService: LibroService) { }
  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.libro$ = this.libroService.findByid(params.get('id'));
    });
      this.libro$.subscribe((params: Libro) => {
      this.copie$ = params.copie;
      });
  }
  goback(){
    this.navCtrl.back();
  }
}







