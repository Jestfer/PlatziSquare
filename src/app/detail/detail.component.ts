import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  id = null
  place:any = {}
  constructor(private route: ActivatedRoute, private placesService: PlacesService){
    this.id = this.route.snapshot.params['id']
    this.place = this.placesService.findPlace(this.id)
      .valueChanges().subscribe(place => {
        this.place = place;
      });
  }
}
