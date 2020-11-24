import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule}  from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule } from '@angular/forms';
import 'chai';

const routes: Routes = [
	{
    path: 'login',
    component: LoginComponent
  }]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SessionModule {
  constructor(){

  }
 }
