import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { environment } from '../environments/environment';

import { AgmCoreModule } from '@agm/core';

import { HighlightDirective } from './directives/highlight.directive';
import { CountClicksDirective } from './directives/count-clicks.directive';

import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'places', component: AppComponent },
  { path: 'detail', component: DetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicksDirective,
    DetailComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
