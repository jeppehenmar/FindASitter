import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./auth-guard";
import {AuthService} from "./auth.service";
import {DataService} from "./data.service";
import { ViewBabiesComponent } from './view-babies/view-babies.component';
import { ViewSittersComponent } from './view-sitters/view-sitters.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSitterComponent,
    RegisterBabyComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewBabiesComponent,
    ViewSittersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
