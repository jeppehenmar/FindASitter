import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmitRegister(registerForm){
    console.log(registerForm)
    if(registerForm.valid){
      console.log("Register form valid")
    } else {
      console.log("Register form invalid")
    }
  }

  createForm(){
    this.registerForm = this.fb.group({
      type: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm()
  }

}
