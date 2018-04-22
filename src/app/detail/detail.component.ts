import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  places: any = [
    { id: 1, plan: 'Premium', active: true, name: 'Makers Academy', description: 'Coming soon', proximity: 1, distance: 0.5 },
    { id: 2, plan: 'Premium', active: true, name: 'Roast and Toast', description: 'Coming soon', proximity: 1, distance: 0.5 },
    { id: 3, plan: 'Free', active: true, name: 'Misty Flower', description: 'Coming soon', proximity: 2, distance: 1 },
    { id: 4, plan: 'Free', active: false, name: 'Ricos Tacos', description: 'Coming soon', proximity: 2, distance: 2 },
    { id: 5, plan: 'Free', active: true, name: 'Ritz Hotel', description: 'Coming soon', proximity: 3, distance: 10 },
    { id: 6, plan: 'Free', active: true, name: 'La Habana', description: 'Coming soon', proximity: 3, distance: 30 }
  ]
  id = null
  place:any = {}
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id'])
    console.log(this.route.snapshot.queryParams['action'])
    this.id = this.route.snapshot.params['id']
    this.place = this.findPlace()
  }
  findPlace(){
    return this.places.find((place) => { return place.id == this.id }) || null
  }
}
