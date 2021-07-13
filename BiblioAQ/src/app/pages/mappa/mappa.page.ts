import {  Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef} from '@angular/core';
import { Biblioteca} from '../../model/biblioteca.model';
import {BibliotecaService} from '../../services/biblioteca.service';
import {NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';


declare let google: any;

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.page.html',
  styleUrls: ['./mappa.page.scss'],
})
export class MappaPage implements OnInit {

  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];

  private biblioteche: Biblioteca[];
   private visit: string;
   private naviga: string;
  constructor(private bibliotecaService: BibliotecaService,private navController: NavController,private translateService: TranslateService) {
  }

  ionViewDidEnter() {
    this.showMap();
  }


  addMarkersToMap(biblioteche) {
    for (const marker of biblioteche) {
      const position = new google.maps.LatLng(marker.latitudine, marker.longitudine);
      const mapMarker = new google.maps.Marker({
        position,
        id: marker.id,
        title: marker.nome,
        latitudine: marker.latitudine,
        longitudine: marker.longitudine

      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }

  }

  addInfoWindowToMarker(marker) {
    this.translateService.get('NAVIGATE').subscribe((data) => {
      this.naviga = data;
    });
    this.translateService.get('DETAIL').subscribe((data) => {
      this.visit = data;
    });
    const infoWindowContent = '<div id="content">' +
      '<h2 id ="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
      '<ion-button id="navigate"> ' +
      this.naviga +
    '</ion-button>' +
      '<ion-button id="visita" >' +
      this.visit +
      '</ion-button>' +
      '</div>';
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log('navigate button clicked!');

          window.open('https://www.google.it/maps/dir///' + marker.latitudine + ',' + marker.longitudine);

        });
      });
      google.maps.event.addListenerOnce(infoWindow,'domready', () =>{
        document.getElementById('visita').addEventListener('click',() => {
          console.log('visita');
          this.visita(marker);
        });
      });

    });

    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (const window of this.infoWindows) {
      window.close();
    }
  }


  showMap() {
    const location = new google.maps.LatLng(42.3498, 13.3995);
    const options = {
      center: location,
      zoom: 13,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.biblioteche);
  }

  ngOnInit(): void {

    this.bibliotecaService.list().subscribe((params: Biblioteca[]) => {
      this.biblioteche = params;
    });
  }
  visita(marker) {
    console.log(marker);
    this.navController.navigateForward(['/biblioteche',this.biblioteche[marker.id-1].id]);
  }
  goback(){
    this.navController.back();
  }


}










