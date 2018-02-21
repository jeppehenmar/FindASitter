import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

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
  }

  createForm(){
    this.registerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      age: [''],
      yearsOfExperience: [''],
      region: [''],
      gender: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.createForm()
  }

}
