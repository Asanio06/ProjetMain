import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {EventMqttService} from "../../services/event-mqtt.service";
import {IMqttMessage} from "ngx-mqtt";

@Component({
  selector: 'app-display-finger-position',
  templateUrl: './display-finger-position.component.html',
  styleUrls: ['./display-finger-position.component.css']
})
export class DisplayFingerPositionComponent implements OnInit {


  constructor() { }


  ngOnInit() {
  }



}
