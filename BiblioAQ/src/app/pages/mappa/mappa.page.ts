import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
declare let google;

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.page.html',
  styleUrls: ['./mappa.page.scss'],
})
export class MappaPage implements AfterViewInit {

  map;
  @ViewChild('mapElement', {static: false}) mapElement;

  mapOptions = {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
  };
  address;
  cityName;
  stateName;
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







  }

}
