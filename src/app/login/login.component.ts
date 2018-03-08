import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  // DI - Dependency Injection
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  onSubmitLogin(loginForm){
    //console.log(loginForm)

    // Send a request to the server
    // Try to login
    if (loginForm.valid){
      // Send an http request
      console.log("Login form valid");
      this.authService.login().subscribe(()=> {
        console.log("Now I'm logged in")
      })
      this.router.navigate(['/home/contact']); //Navigate to contact if login is valid
    } else{
      //Show errors and not send a request
      alert("Fill out the fields")
      console.log("Login form invalid")
    }
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
