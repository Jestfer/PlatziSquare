import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { HighlightDirective } from './directives/highlight.directive';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiAGM
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
