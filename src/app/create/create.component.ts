import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  place:any = {}
  constructor(private placesService: PlacesService){
  }

  savePlace(){
    this.place.id = Date.now()
    this.placesService.savePlace(this.place)
    alert('Business saved successfully!')
    this.place = {}
  }
}
