import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 5;
  ready = false;
  name = '';

  constructor(){
    setTimeout(() => {
      this.ready = true;
    }, 3000)
  }
  sthHappens(){
    alert('Doing sth!');
  }
}
