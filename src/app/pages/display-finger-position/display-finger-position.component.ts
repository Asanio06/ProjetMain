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
  events: any[] = [] ;
  private deviceId: string = "";
  subscription: Subscription | undefined;

  constructor(private eventMqtt : EventMqttService) { }


  ngOnInit() {
    this.subscribeToTopic();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private subscribeToTopic() {
    this.subscription = this.eventMqtt.topic(this.deviceId)
      .subscribe((data: IMqttMessage) => {
        let item = JSON.parse(data.payload.toString());
        this.events.push(item);
      });
  }

}
