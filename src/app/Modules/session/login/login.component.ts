import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  usererror:string;
  passworderror:string;

  user:boolean=false;
  pass:boolean=false;

  constructor(private router:Router) {this.username=null;
    this.password=null; }

  ngOnInit(): void {
  }

  validateusername(){
    if(this.username === null || this.username === ""){ 
      this.user = true;
      this.usererror="*This is required field"
    }else{
      this.user=false;
    }
  }
  
  validate(){
    if(this.password === null || this.password === ""){
      this.pass=true;
      this.passworderror="*This is required Field"
    }else{
       this.pass=false;
    }
  }
  signIn(){
    //this.router.navigateByUrl('/dashboard')
    if(this.username=="admin@gmail.com" && this.password == "123456789")
    {
      this.router.navigateByUrl('/dashboard')
    console.log("welcome to dashboard")
  }else{
    console.log("user unauthorized")
  }
  }
  
  }


