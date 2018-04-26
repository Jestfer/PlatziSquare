import { Injectable } from "@angular/core"
import { AngularFireDatabase } from "angularfire2/database"
import { Http } from "@angular/http"

@Injectable()

export class PlacesService {
  constructor(private afDB: AngularFireDatabase, private http: Http){
  }

  public getPlaces() {
    return this.afDB.list('places/') || null
  }

  public findPlace(id) {
    return this.afDB.object(`places/${id}`)
  }

  public savePlace(place) {
    this.afDB.database.ref('places/' + place.id).set(place)
  }

  public getGeoData(address) {
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address)
  }
}
