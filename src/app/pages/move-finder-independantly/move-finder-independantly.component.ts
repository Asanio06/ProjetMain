import { Component, OnInit } from '@angular/core';
import {SendDataService} from "../../services/send-data.service";

@Component({
  selector: 'app-move-finder-independantly',
  templateUrl: './move-finder-independantly.component.html',
  styleUrls: ['./move-finder-independantly.component.css']
})
export class MoveFinderIndependantlyComponent implements OnInit {

  doigt1: number = 180;
  doigt2: number = 180;
  doigt3: number = 180;
  doigt4: number = 180;
  doigt5: number = 180;

  constructor(private sendDataService:SendDataService) { }

  ngOnInit(): void {
  }

  changeDoigt1($event : any){
    this.sendDataService.sendData("1",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
    this.doigt1 = $event.target.value * 10 + 90
  }
  changeDoigt2($event : any){
    this.sendDataService.sendData("2",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
    this.doigt2 = $event.target.value * 10 + 90
  }

  changeDoigt3($event : any){
    this.sendDataService.sendData("3",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
    this.doigt3 = $event.target.value * 10 + 90

  }
  changeDoigt4($event : any){
    this.sendDataService.sendData("4",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
    this.doigt4 = $event.target.value * 10 + 90

  }
  changeDoigt5($event : any){
    this.sendDataService.sendData("5",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
    this.doigt5 = $event.target.value * 10 + 90

  }

  onClickOuvrirMain(){
    this.sendDataService.sendData("6","90").subscribe((re)=>console.log);
    this.doigt1 = 180;
    this.doigt2 = 180;
    this.doigt3 = 180;
    this.doigt4 = 180;
    this.doigt5 = 180;
  }

  onClickCheckMain(){
    this.sendDataService.sendData("7","90").subscribe((re)=>console.log);

    this.doigt1 = 180;
    this.doigt2 = 180;
    this.doigt3 = 180;
    this.doigt4 = 180;
    this.doigt5 = 180;


      this.doigt1 = 90;
      this.doigt2 = 90;
      this.doigt3 = 90;
      this.doigt4 = 90;
      this.doigt5 = 90;
  }

  onClickFermerMain(){
    this.sendDataService.sendData("0", "90").subscribe((re)=>console.log)
    this.doigt1 = 90;
    this.doigt2 = 90;
    this.doigt3 = 90;
    this.doigt4 = 90;
    this.doigt5 = 90;
  }
}


