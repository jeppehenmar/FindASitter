import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {

  private registerSitterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmitRegister(registerSitterForm){
    if(registerSitterForm.valid){
      console.log("Register form valid")
    } else {
      alert("Please fill out all fields")
      console.log(registerSitterForm)
      console.log("Register form invalid")
    }
  }

  createForm(){
    this.registerSitterForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      region: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.createForm()
  }

}
