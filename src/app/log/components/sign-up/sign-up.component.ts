import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  emailField: FormControl;
  passwordField: FormControl;
  nameField: FormControl;

  constructor() { 
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.emailField.valueChanges
    .subscribe(value =>{
      console.log(value);
    });

    this.passwordField = new FormControl('',[
      Validators.required
    ]);
    this.passwordField.valueChanges
    .subscribe(value =>{
      console.log(value);
    });

    this.nameField = new FormControl('',[
      Validators.required
    ]);
    this.nameField.valueChanges
    .subscribe(value =>{
      console.log(value);
    })
  }

  ngOnInit(): void {
  }
  signUp(){
    if(this.emailField.value){
      console.log(this.emailField.value)
    }
  }

}
