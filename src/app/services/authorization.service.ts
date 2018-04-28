import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()

export class AuthorizationService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('You are now logged in!')
        console.log(response);
      })
      .catch((error) => {
        alert('Error')
        console.log(error);
      })
  }

  public signUp = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('User registered successfully!')
        console.log(response);
      })
      .catch((error) => {
        alert('Error')
        console.log(error);
      })
  }
}
