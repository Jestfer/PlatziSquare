import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare'
  places:any = [
    { name: 'Ricos Tacos'},
    { name: 'Misty Flower'},
    { name: 'Roast and Toast'}
  ]

  constructor(){

  }
}
