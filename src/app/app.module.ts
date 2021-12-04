import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MoveFinderIndependantlyComponent } from './pages/move-finder-independantly/move-finder-independantly.component';
import { DisplayFingerPositionComponent } from './pages/display-finger-position/display-finger-position.component';
import { RecordMoveComponent } from './pages/record-move/record-move.component';
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { environment as env } from '../environments/environment';
import { RecordComponent } from './pages/record/record.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '',
};

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MoveFinderIndependantlyComponent,
    DisplayFingerPositionComponent,
    RecordMoveComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
