import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/app/model/biblioteca.model';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { Observable } from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-biblioteche',
  templateUrl: './biblioteche.page.html',
  styleUrls: ['./biblioteche.page.scss'],
})
export class BibliotechePage implements OnInit {

  private biblioteca$: Observable<Biblioteca[]>;

  constructor(private bibliotecaService: BibliotecaService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.biblioteca$ = this.bibliotecaService.findById(params.get('id'));
    });
  }
}
