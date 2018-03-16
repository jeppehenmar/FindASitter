import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Sitter} from "../entities/sitter";
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {

  private registerSitterForm: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) { }

  onSubmitRegister(registerSitterForm){
    if(registerSitterForm.valid){
      let sitter: Sitter = registerSitterForm.value;
      console.log("Register form valid");
      this.data.addSitter(sitter)
      this.router.navigate(["/home/view-sitters"])
    } else {
      alert("Please fill out all fields");
      console.log(registerSitterForm);
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
