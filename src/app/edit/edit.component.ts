import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PlacesService } from '../services/places.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent {
  id = null
  place:any = {}
  done = false

  constructor(private route: ActivatedRoute, private placesService: PlacesService){
    this.id = this.route.snapshot.params['id']
    this.place = this.placesService.findPlace(this.id)
      .valueChanges().subscribe(place => {
        this.place = place
      })
  }

  // Esta función es como savePlace, pero sin modificar el ID
  // Quizá debería ir en el places.service ... Pero no veo mucha diferencia
  // porque reutilizamos los métodos ya existentes, con pequeñas modificaciones
  updatePlace() {
    let address = this.place.street + ',' + this.place.town + ',' + this.place.country

    this.placesService.getGeoData(address)
      .subscribe(result => {
        console.log(result.json().results[0])
        
        this.place.lat = result.json().results[0].geometry.location.lat
        this.place.lng = result.json().results[0].geometry.location.lng

        this.placesService.savePlace(this.place)
        // DESPUÉS DE GUARDAR ES CUANDO MOSTRAMOS EL MENSAJE! PORQUE IGUAL NO SE GUARDA
        // POR UN PROBLEMA DEL SERVIDOR y Mostramos al usuario que se ha guardado bien, siendo mentira
        this.done = true
        this.scroll('done') // => remirar
      })
  }

  // Hacer scroll automático a la alerta al usuario por ID, o mirar en Angular: directiva
  scroll(elem) {
    elem = document.getElementById(elem)
    console.log(elem)
    elem.scrollIntoView()
  }
}
