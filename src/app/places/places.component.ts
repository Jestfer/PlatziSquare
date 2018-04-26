import { Component, trigger, state, style, transition, animate } from '@angular/core'
import { PlacesService } from '../services/places.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  animations: [
    trigger('animatedContainer', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial => final', animate(2000)),
      transition('final => initial', animate(1000)),
    ])
  ]
})

export class PlacesComponent {
  title = 'PlatziSquare'
  lat: number = 51.5173403
  lng: number = -0.0754695
  places = null
  state = 'initial'

  /// Este sería la función que se bindearía a un botón con un click event para lanzar una animación manual!
  // animate(){
  //   this.state = (this.state === 'final') ? 'initial' : 'final'
  // }

  constructor(private placesService: PlacesService) {
    placesService.getPlaces()
      .valueChanges().subscribe(places => {
        this.places = places
        this.state = 'final' // => animación automática al obtener los negocios
      })
  }
}
