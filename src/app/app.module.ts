import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';
import { environment } from '../environments/environment';

import { AgmCoreModule } from '@agm/core';

import { HighlightDirective } from './directives/highlight.directive';
import { CountClicksDirective } from './directives/count-clicks.directive';

import { Routes, RouterModule } from "@angular/router";
import { PlacesService } from './services/places.service';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:id', component: DetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicksDirective,
    DetailComponent,
    PlacesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiAGM
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
