import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { AngularFireAuth } from "angularfire2/auth"
import * as firebase from "firebase/app"

@Injectable()

export class AuthorizationService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.isLogged()
  }

  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        alert('Facebook login successful!')
        this.router.navigate(['places'])
      }).catch((error) => {
        console.log(error);
      })
  }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('You are now logged in!')
        this.router.navigate(['places'])
      })
      .catch((error) => {
        alert('Error')
        console.log(error)
      })
  }

  public signUp = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        alert('User registered successfully!')
        this.router.navigate(['places'])
      })
      .catch((error) => {
        alert('Error')
        console.log(error)
      })
  }

  public isLogged() {
    return this.angularFireAuth.authState
  }

  public logout() {
    this.angularFireAuth.auth.signOut()
    alert('You logged out!')
  }

  public getUserInfo() {
    return this.angularFireAuth.auth.currentUser.email
  }
}
