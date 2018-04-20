import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare'
  places:any = [
    { plan: 'premium', active: true, name: 'Makers Academy', proximity: 1, distance: 0 },
    { plan: 'premium', active: true, name: 'Roast and Toast', proximity: 1, distance: 0.5 },
    { plan: 'free', active: true, name: 'Misty Flower', proximity: 2, distance: 1 },
    { plan: 'free', active: false, name: 'Ricos Tacos', proximity: 2, distance: 2 },
    { plan: 'free', active: true, name: 'Ritz Hotel', proximity: 3, distance: 10 },
    { plan: 'free', active: true, name: 'La Habana', proximity: 3, distance: 30 }
  ]
  lat:number = 51.5173403
  lng:number = -0.0754695

  constructor(){

  }
}
