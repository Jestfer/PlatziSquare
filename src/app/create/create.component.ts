import { Component } from '@angular/core'
import { PlacesService } from '../services/places.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  place:any = {}
  done = false

  constructor(private placesService: PlacesService) {}

  savePlace() {
    let address = this.place.street + ',' + this.place.town + ',' + this.place.country
    // We pass the address info to the service to connect to Firebase
    this.placesService.getGeoData(address) // => returns a promise! 'We subscribe to the Promise'
      // .valueChanges().subscribe(result => {
      .subscribe(result => {
        this.done = true
        this.place.lat = result.json().results[0].geometry.location.lat
        this.place.lng = result.json().results[0].geometry.location.lng

        this.place.id = Date.now()
        this.placesService.savePlace(this.place)

        this.place = {}
      })
  }
}
