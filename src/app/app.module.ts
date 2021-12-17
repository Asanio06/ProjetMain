import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MoveFinderIndependantlyComponent } from './pages/move-finder-independantly/move-finder-independantly.component';
import { DisplayFingerPositionComponent } from './pages/display-finger-position/display-finger-position.component';
import { environment as env } from '../environments/environment';
import { RecordComponent } from './pages/record/record.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MoveFinderIndependantlyComponent,
    DisplayFingerPositionComponent,
    RecordComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
