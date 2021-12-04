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
    this.sendDataService.sendData("1",$event.target.value.toString())
  }
  changeDoigt2($event : any){
    this.sendDataService.sendData("2",$event.target.value.toString())
  }
  changeDoigt3($event : any){
    this.sendDataService.sendData("3",$event.target.value.toString())
  }
  changeDoigt4($event : any){
    console.log($event.target.value)
  }
  changeDoigt5($event : any){
    console.log($event.target.value)
  }

  onClickFermerMain(){
    this.sendDataService.sendData("0", "90")
  }
}


