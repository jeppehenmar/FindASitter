import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {

  private registerBabyForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmitRegisterBaby(registerBabyForm){
    if(registerBabyForm.valid){
      console.log("Register form valid")
    } else {
      console.log("Register form invalid")
    }
  }

  createForm(){
    this.registerBabyForm = this.fb.group({
      firstName: ['', Validators.required],
      postalCode: ['', Validators.required],
      picture: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm()
  }

}