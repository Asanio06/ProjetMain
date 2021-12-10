import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent} from "./pages/accueil/accueil.component";
import {DisplayFingerPositionComponent} from "./pages/display-finger-position/display-finger-position.component";
import {MoveFinderIndependantlyComponent} from "./pages/move-finder-independantly/move-finder-independantly.component";
import {RecordMoveComponent} from "./pages/record-move/record-move.component";
import {RecordComponent} from "./pages/record/record.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'record', component: RecordComponent },
  { path: 'display', component: DisplayFingerPositionComponent },
  { path: 'move', component: MoveFinderIndependantlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
