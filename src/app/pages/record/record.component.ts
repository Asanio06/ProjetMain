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
  doigt1: number = 0
  doigt2: number = 0
  doigt3: number = 0
  doigt4: number = 0
  doigt5: number = 0


  constructor(private sendDataService: SendDataService) {
  }

  ngOnInit(): void {

  }

  changeDoigt1($event: any) {
    this.doigt1 = $event.target.value * 10 + 90
  }

  changeDoigt2($event: any) {
    this.doigt2 = $event.target.value * 10 + 90
  }

  changeDoigt3($event: any) {
    this.doigt3 = $event.target.value * 10 + 90
  }

  changeDoigt4($event: any) {
    this.doigt4 = $event.target.value * 10 + 90
  }

  changeDoigt5($event: any) {
    this.doigt5 = $event.target.value * 10 + 90
  }


  sendData() {

    if (!this.recorded) {
      return;
    }


    const source2 = timer(1000, 1000);
    this.subscribeSend = source2.subscribe(val => {
      // @ts-ignore

      if (!this.temp[val]) {
        this.stopSending();
        return;
      }
      // @ts-ignore
      const hand = this.temp[val];

      console.log(hand)

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
      doigt1: this.doigt1,
      doigt2: this.doigt2,
      doigt3: this.doigt3,
      doigt4: this.doigt4,
      doigt5: this.doigt5,
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
