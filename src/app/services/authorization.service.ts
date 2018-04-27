import { Injectable } from "@angular/core";

@Injectable()

export class AuthorizationService {
  public login = (email, password) => {
    console.log('Login function!');
  }

  public signUp = (email, password) => {
    console.log('Sign up function!');
  }
}
