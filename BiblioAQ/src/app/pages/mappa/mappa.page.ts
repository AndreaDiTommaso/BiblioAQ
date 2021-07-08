import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import { Biblioteca} from '../../model/biblioteca.model';
import {BibliotecaService} from '../../services/biblioteca.service';
import {ParamMap} from '@angular/router';
import {NavController} from '@ionic/angular';


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

  private biblioteche;

  constructor(private bibliotecaService: BibliotecaService,private navController: NavController) {
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
    const infoWindowContent = '<div id="content">' +
      '<h2 id ="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
      '<p>Latitude: ' + marker.latitudine + '</p>' +
      '<p>Longitide: ' + marker.longitudine + '</p>' +
      '<ion-button id="navigate">Navigate</ion-button>' +
      '<ion-button id="visita" > Visita</ion-button>' +
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
          //code to navigate using google maps app
          //window.open('https://www.google.com/maps/dir?api=1&destination='+marker.latitude+','+marker.longitude);

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








//  mapOptions = {
 //   center: {lat: -34.397, lng: 150.644},
 //   zoom: 8,
 // };
 //address;
  //cityName;
  //stateName;
/*
  constructor(private geolocation: Geolocation) {


   }

  loadMap(){
   this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    const marker=new google.maps.Marker({
      position: this.mapOptions.center,
      map:this.map,
      title: 'Locazione corrente',
    });
    this.geocodeLatLng(this.mapOptions.center);

  }
  geocodeLatLng(currentPosition) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: currentPosition },(results, status) => {
        if (status==='OK') {
          if(results[0]){
            console.log(results);
            this.address=results[0].formatted_address;
            if(results[0].address_components.length >0){

              results[0].address_components.array.forEach(item => {
                if(item.types.indexOf('locality')!== -1){
                  this.cityName=item.short_name;
                }
                if(item.types.indexOf('"administrative_area_level_1"')!== -1){
                  this.stateName=item.short_name;
                }

              });
            }




            this.map.setZoom(11);
            const marker = new google.maps.Marker({
            position: currentPosition,
            map: this.map,
          });
        } else {
          window.alert('No results found');
        }
      }else {
        window.alert('Geodecoder failed due to: '+status);
      }
      });
    }


  ngAfterViewInit(): void {


    this.geolocation.getCurrentPosition().then((resp: Geoposition) => {
      this.mapOptions.center.lat=resp.coords.latitude;
      this.mapOptions.center.lng=resp.coords.longitude;
      this.loadMap();
    }).catch((error) => {
      console.log('Error getting location',error);
    });







  }*/


