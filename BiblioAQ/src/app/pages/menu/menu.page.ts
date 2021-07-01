import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {Storage} from "@ionic/storage";
import {LOGGATO} from "../../constants";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
    this.storage.set(LOGGATO, false);
  }

}
