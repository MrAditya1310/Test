import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule } from './auth-routing.routing';
import { AuthGuard } from './guard/auth.guard';




@NgModule({
  declarations: [],
  providers:[AuthGuard],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
