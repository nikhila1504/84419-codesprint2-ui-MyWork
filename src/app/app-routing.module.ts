import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'place',component:PlaceappointmentComponent},
  {path:'view',component:ViewappointmentComponent},
  {path:'contact',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
