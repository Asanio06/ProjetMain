import {Component, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {SendDataService} from "../../services/send-data.service";


@Component({
  selector: 'app-display-finger-position',
  templateUrl: './display-finger-position.component.html',
  styleUrls: ['./display-finger-position.component.css']
})
export class DisplayFingerPositionComponent implements OnInit {

  doigt1: number = 0;
  doigt2: number = 0;
  doigt3: number = 0;
  doigt4: number = 0;
  doigt5: number = 0;
  private subscriber: Subscription | undefined;

  constructor(private sendData: SendDataService) {
  }


  ngOnInit() {
    const source = timer(1000, 1000);
    this.subscriber = source.subscribe(val => {

      this.sendData.getData().subscribe((val: string) => {
        // @ts-ignore
        const tab = val['lastData'].split(":");
        this.doigt1 = parseInt(tab[0]);
        this.doigt2 = parseInt(tab[1]);
        this.doigt3 = parseInt(tab[2]);
        this.doigt4 = parseInt(tab[3]);
        this.doigt5 = parseInt(tab[4]);
      })
    });
  }


}
