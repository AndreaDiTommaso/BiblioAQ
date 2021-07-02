import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {ElementRef} from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.page.html',
  styleUrls: ['./mappa.page.scss'],
})
export class MappaPage {

  map :any;
  @ViewChild('map', {read:ElementRef,static: false}) mapRef:ElementRef;

  infoWindows:any=[];
  markers:any=[
    {
      title: "National Art Gallery",
      latitude: "-17.824991",
      longitude:"31.049295"
    },
    {
      title: "Dominican Convent School",
      latitude: "-17.822647",
      longitude:"31.052042"
    },
    {
      title: "West End Hospital",
      latitude: "-17.820987",
      longitude:"31.039682"
    }

  ];

  constructor() {}

  ionViewDidEnter()
  {
    this.showMap();
  }


  addMarkersToMap(markers){
    for(let marker of markers){
      let position=new google.maps.LatLng(marker.latitude,marker.longitude);
      let mapMarker=new google.maps.Marker({
        position:position,
        title:marker.title,
        latitude:marker.latitude,
        longitude:marker.longitude

      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }

  }

  addInfoWindowToMarker(marker){
    let infoWindowContent= '<div id="content">'+
                              '<h2 id ="firstHeading" class"firstHeading">'+marker.title+'</h2>'+
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitide: ' + marker.longitude +'</p>'+
                              '</div>';
  let infoWindow=new google.maps.infoWindow({
    content: infoWindowContent
  });

  marker.addListener('click',()=>{
    this.closeAllInfoWindows();
    infoWindow.open(this.map, marker);
  });
  this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }







  showMap(){
    const location=new google.maps.LatLng(-17.824858,31.053028);
    const options={
      center:location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
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

}
