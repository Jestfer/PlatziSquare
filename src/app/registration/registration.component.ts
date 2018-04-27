import { Component } from '@angular/core'
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService.signUp('email', 'password')
  }
}
