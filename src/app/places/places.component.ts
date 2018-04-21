import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html'
})
export class PlacesComponent {
  title = 'PlatziSquare'
  places: any = [
    { id: 1, plan: 'premium', active: true, name: 'Makers Academy', proximity: 1, distance: 0 },
    { id: 2, plan: 'premium', active: true, name: 'Roast and Toast', proximity: 1, distance: 0.5 },
    { id: 3, plan: 'free', active: true, name: 'Misty Flower', proximity: 2, distance: 1 },
    { id: 4, plan: 'free', active: false, name: 'Ricos Tacos', proximity: 2, distance: 2 },
    { id: 5, plan: 'free', active: true, name: 'Ritz Hotel', proximity: 3, distance: 10 },
    { id: 6, plan: 'free', active: true, name: 'La Habana', proximity: 3, distance: 30 }
  ]
  lat: number = 51.5173403
  lng: number = -0.0754695

  constructor() {

  }
}
