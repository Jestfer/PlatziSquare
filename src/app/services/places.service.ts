import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class PlacesService {
  places: any = [
    { id: 1, plan: 'Premium', active: true, name: 'Makers Academy', description: 'Coming soon', proximity: 1, distance: 0.5 },
    { id: 2, plan: 'Premium', active: true, name: 'Roast and Toast', description: 'Coming soon', proximity: 1, distance: 0.5 },
    { id: 3, plan: 'Free', active: true, name: 'Misty Flower', description: 'Coming soon', proximity: 2, distance: 1 },
    { id: 4, plan: 'Free', active: false, name: 'Ricos Tacos', description: 'Coming soon', proximity: 2, distance: 2 },
    { id: 5, plan: 'Free', active: true, name: 'Ritz Hotel', description: 'Coming soon', proximity: 3, distance: 10 },
    { id: 6, plan: 'Free', active: true, name: 'La Habana', description: 'Coming soon', proximity: 3, distance: 30 }
  ]
  constructor(private afDB: AngularFireDatabase){
  }

  public getPlaces() {
    return this.places
  }
  public findPlace(id) {
    return this.places.find((place) => { return place.id == id }) || null
  }
  public savePlace(place){
    this.afDB.database.ref('places/1').set(place)
  }
}
