import {Component, OnInit} from '@angular/core';

import {Observable, Subscription, timer} from "rxjs";
import {defaultsDeep} from 'lodash';
import {SendDataService} from "../../services/send-data.service";
import {Hand} from "../../models/hand.model";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  record: boolean = false;
  recorded: boolean = false;
  temp = {};
  private subscribeRegister: Subscription | undefined;
  private subscribeSend: Subscription | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  sendData() {

    if (!this.recorded) {
      return;
    }

    let counter = 0;

    const source2 = timer(1000, 1000,);
    this.subscribeSend = source2.subscribe(val => {
      // @ts-ignore

      if (!this.temp[val]) {
        this.stopSending();
        return;
      }
      // @ts-ignore
      const hand = this.temp[val];

      //
      // this.sendDataService.sendData("1", hand.doigt1.toString())
      // this.sendDataService.sendData("2", hand.doigt2.toString())
      // this.sendDataService.sendData("3", hand.doigt3.toString())
      // this.sendDataService.sendData("4", hand.doigt4.toString())
      // this.sendDataService.sendData("5", hand.doigt5.toString())
    });


  }

  //
  getData(): Hand {
    const hand: Hand = defaultsDeep({
      doigt1: 90,
      doigt2: 90,
      doigt3: 90,
      doigt4: 90,
      doigt5: 90,
    })
    return hand;
  }

  //
  recordMove() {
    const source = timer(1000, 1000);
    this.subscribeRegister = source.subscribe(val => {
      // @ts-ignore
      this.temp[val] = this.getData();

      console.log("yeees")
    });
    this.record = true;
    this.recorded = false;

  }

  stopRecord() {
    this.subscribeRegister?.unsubscribe();
    this.record = false;
    this.recorded = true;
  }

  //
  stopSending() {
    this.subscribeSend?.unsubscribe();
  }

}
