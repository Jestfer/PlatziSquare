import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare'
  places:any = [
    { active: true, name: 'Makers Academy', proximity: 1, distance: 0 },
    { active: true, name: 'Roast and Toast', proximity: 1, distance: 0.5 },
    { active: true, name: 'Misty Flower', proximity: 2, distance: 1 },
    { active: false, name: 'Ricos Tacos', proximity: 2, distance: 2 },
    { active: true, name: 'Ritz Hotel', proximity: 3, distance: 10 },
    { active: true, name: 'La Habana', proximity: 3, distance: 30 }
  ]
  lat:number = 51.5173403
  lng:number = -0.0754695

  constructor(){

  }
}
