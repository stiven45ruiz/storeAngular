import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  emailField: FormControl;
  passwordField: FormControl;

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
    })
   }

  ngOnInit(): void {
    
  }
  signIn(){
    if(this.emailField.value){
      console.log(this.emailField.value)
    }
  }
}
