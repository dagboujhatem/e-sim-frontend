import { Component, OnInit  } from '@angular/core';
import { MapsService } from './maps.service';

declare var google: any;


@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrl: './store-map.component.css'
})

 export class StoreMapComponent  {openGoogleMapsSearch(): void {
  // Ouvre l'URL de recherche Google Maps dans un nouvel onglet
  window.open('https://www.google.com/maps/search/boutique+ooredoo/@36.8005652,10.0597548,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D', '_blank');}
}

  
  
    