import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {GoogleMaps, GoogleMapsEvent, LatLng} from '@ionic-native/google-maps';


declare let google;

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.page.html',
  styleUrls: ['./mappa.page.scss'],
})
export class MappaPage implements OnInit {

 @ViewChild('map') mapElement: ElementRef;

  //map: any;
 //mapInitialised: boolean = false;
  //apiKey: any;

  constructor() {
    //this.loadGoogleMaps();
  }
/*
  loadGoogleMaps(){

    this.addConnectivityListeners();

    if(typeof google == 'undefined' || typeof google.maps == 'undefined'){

      console.log('Google maps JavaScript needs to be loaded.');
      this.disableMap();

      if(this.connectivityService.isOnline()){
        console.log('online, loading map');


        const script = document.createElement('script');
        script.id = 'googleMaps';

        if(this.apiKey){
          script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
          script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
        }

        document.body.appendChild(script);

      }
    }
    else {

      if(this.connectivityService.isOnline()){
        console.log('showing map');

        this.enableMap();
      }
      else {
        console.log('disabling map');
        this.disableMap();
      }

    }

  }


  disableMap(){
    console.log('disable map');
  }

  enableMap(){
    console.log('enable map');
  }

  addConnectivityListeners(){

    const onOnline = () => {

      setTimeout(() => {
        if(typeof google == 'undefined' || typeof google.maps == 'undefined'){

          this.loadGoogleMaps();

        }
        this.enableMap();
      }, 2000);

    };

    const onOffline = () => {
      this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }
*/
  ngOnInit(): void {
  }

}
