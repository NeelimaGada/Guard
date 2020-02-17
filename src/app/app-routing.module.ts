import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { DeactivateGuard } from './deactivate.guard';


const routes: Routes = [
 
  { path:'about',component:AboutComponent, canDeactivate: [DeactivateGuard] },
  { path:'contact',component:ContactComponent, canDeactivate: [DeactivateGuard]},
  { path:'home',component:HomeComponent, canDeactivate: [DeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
