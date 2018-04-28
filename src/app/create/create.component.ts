import { Component } from '@angular/core'
import { PlacesService } from '../services/places.service'
import 'rxjs/Rx'
import { Observable } from 'rxjs'
import { FormControl } from '@angular/forms'
import { Http } from '@angular/http'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  place: any = {}
  done = false
  
  // Observable string, nos mandará Google los datos...
  results$: Observable<any>
  private searchField: FormControl

  constructor(private placesService: PlacesService, private http: Http) {
    const URL = 'http://maps.google.com/maps/api/geocode/json'
    this.searchField = new FormControl()
    this.results$ = this.searchField.valueChanges // => Observamos los cambios en un string
      .switchMap(query => this.http.get(`${URL}?address=${query}`))
      .map(response => response.json())
      .map(response => response.results)
  }

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
