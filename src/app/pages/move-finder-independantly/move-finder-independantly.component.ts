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
    console.log($event.target.value)
  }
  changeDoigt2($event : any){
    console.log($event.target.value)
  }
  changeDoigt3($event : any){
    console.log($event.target.value)
  }
  changeDoigt4($event : any){
    this.sendDataService.sendData("4",$event.target.value.toString())
  }
  changeDoigt5($event : any){
    this.sendDataService.sendData("5",$event.target.value.toString())
  }

  onClickOuvrirMain(){
    this.sendDataService.sendData("6","90");

  }

  onClickCheckMain(){
    this.sendDataService.sendData("7","90");

  }
}
