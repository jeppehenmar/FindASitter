import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ContactComponent} from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth-guard";
import {ViewBabiesComponent} from "./view-babies/view-babies.component";
import {ViewSittersComponent} from "./view-sitters/view-sitters.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent, children: [
    {path: 'contact', component: ContactComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'view-babies', component: ViewBabiesComponent},
    {path: 'view-sitters', component: ViewSittersComponent},
    {path: '**', component: PageNotFoundComponent}
  ]},
  //{path: 'contact', component: ContactComponent},
  //{path: 'register', component: RegisterComponent},
  //{path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
