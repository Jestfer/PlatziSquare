import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { DetailComponent } from './detail/detail.component'
import { PlacesComponent } from './places/places.component'
import { ContactComponent } from './contact/contact.component'
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component'
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'
import { LinkifystrPipe } from './pipes/linkifystr.pipe'
import { environment } from '../environments/environment'

import { AgmCoreModule } from '@agm/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HighlightDirective } from './directives/highlight.directive'
import { CountClicksDirective } from './directives/count-clicks.directive'

import { Routes, RouterModule } from "@angular/router"
import { PlacesService } from './services/places.service'
import { AuthorizationService } from './services/authorization.service'
import { GuardService } from './services/guard.service'

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AngularFontAwesomeModule } from 'angular-font-awesome'

const appRoutes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'places', component: PlacesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'create', component: CreateComponent, canActivate: [GuardService] },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: EditComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
]

export const firebaseConfig = {
  apiKey: environment.firebaseConfig.apiKey,
  authDomain: environment.firebaseConfig.authDomain,
  databaseURL: environment.firebaseConfig.databaseURL,
  storageBucket: environment.firebaseConfig.storageBucket,
  messagingSenderId: environment.firebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicksDirective,
    DetailComponent,
    PlacesComponent,
    ContactComponent,
    CreateComponent,
    EditComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiAGM
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFontAwesomeModule
  ],
  providers: [PlacesService, AuthorizationService, GuardService],
  bootstrap: [AppComponent]
})

export class AppModule {}
