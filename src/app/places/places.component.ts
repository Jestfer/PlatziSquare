import { Component, trigger, state, style } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  animations: [
    trigger('animatedContainer', [
      state('initial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5, 10, 20, 30deg)'
      }))
    ])
  ]
})
export class PlacesComponent {
  title = 'PlatziSquare'
  lat: number = 51.5173403
  lng: number = -0.0754695
  places = null

  state = 'initial'

  constructor(private placesService: PlacesService) {
    placesService.getPlaces()
      .valueChanges().subscribe(places => {
        this.places = places
      })
  }
}
