import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent} from "./pages/accueil/accueil.component";
import {DisplayFingerPositionComponent} from "./pages/display-finger-position/display-finger-position.component";
import {MoveFinderIndependantlyComponent} from "./pages/move-finder-independantly/move-finder-independantly.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'display', component: DisplayFingerPositionComponent },
  { path: 'move', component: MoveFinderIndependantlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
