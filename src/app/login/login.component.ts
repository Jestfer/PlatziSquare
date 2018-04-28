import { Component } from '@angular/core'
import { AuthorizationService } from '../services/authorization.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  loginData: any = {}

  constructor(private authorizationService: AuthorizationService) {}

  login() {
    this.authorizationService.login(this.loginData.email, this.loginData.password)
  }
  facebookLogin() {
    this.authorizationService.facebookLogin()
  }
}
