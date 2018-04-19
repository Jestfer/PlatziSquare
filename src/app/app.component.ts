import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare'
  places:any = [
    { active: true, name: 'Makers Academy'},
    { active: true, name: 'Misty Flower'},
    { active: false, name: 'Ricos Tacos'},
    { active: true, name: 'Ritz Hotel'},
    { active: true, name: 'Roast and Toast'},
    { active: true, name: 'La Habana'}
  ]
  lat:number = 51.5173403
  lng:number = -0.0754695
  people:any = [
    { name: 'Kevin', age: 17 },
    { name: 'Asensio', age: 20 },
    { name: 'CR7', age: 33 }
  ]

  constructor(){

  }
}
