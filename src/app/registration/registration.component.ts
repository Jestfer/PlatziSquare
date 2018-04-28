import { Component } from '@angular/core'
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  registration: any = {}

  constructor(private authorizationService: AuthorizationService) {}

  signUp(){    
    this.authorizationService.signUp(this.registration.email, this.registration.password)
  }
}
