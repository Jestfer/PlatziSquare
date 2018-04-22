import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html'
})
export class PlacesComponent {
  title = 'PlatziSquare'
  lat: number = 51.5173403
  lng: number = -0.0754695
  places = null

  constructor(private placesService: PlacesService) {
    placesService.getPlaces()
      .valueChanges().subscribe(places => {
        this.places = places
      })
  }
}
