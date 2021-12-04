import { Component, OnInit } from '@angular/core';
import {SendDataService} from "../../services/send-data.service";

@Component({
  selector: 'app-move-finder-independantly',
  templateUrl: './move-finder-independantly.component.html',
  styleUrls: ['./move-finder-independantly.component.css']
})
export class MoveFinderIndependantlyComponent implements OnInit {

  constructor(private sendDataService:SendDataService) { }

  ngOnInit(): void {
  }

  changeDoigt1($event : any){
    this.sendDataService.sendData("1",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
  }
  changeDoigt2($event : any){
    this.sendDataService.sendData("2",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
  }
  changeDoigt3($event : any){
    this.sendDataService.sendData("3",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
  }
  changeDoigt4($event : any){
    this.sendDataService.sendData("4",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
  }
  changeDoigt5($event : any){
    this.sendDataService.sendData("5",($event.target.value * 10 + 90).toString()).subscribe((re)=>console.log)
  }

  onClickOuvrirMain(){
    this.sendDataService.sendData("6","90").subscribe((re)=>console.log);

  }

  onClickCheckMain(){
    this.sendDataService.sendData("7","90").subscribe((re)=>console.log);

  }

  onClickFermerMain(){
    this.sendDataService.sendData("0", "90").subscribe((re)=>console.log)
  }
}


