import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//La liste de mes routes
const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent},
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
