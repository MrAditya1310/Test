import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { SessionModule } from './Modules/session/session.module';
import { AuthModule } from './Modules/auth/auth.module';
import { AuthGuard } from './Modules/auth/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SessionModule,
    AuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
