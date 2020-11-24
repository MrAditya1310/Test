import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './Modules/auth/guard/auth.guard';
import {LoginComponent} from './Modules/session/login/login.component';
import { SessionModule } from './Modules/session/session.module';


const routes: Routes = [ 
{path: 'dashboard', canActivate:[AuthGuard],
 component:DashboardComponent},
 {path:'login',
component:LoginComponent},

{path:'auth' ,
canActivate:[AuthGuard],
loadChildren:'.\/Modules\/session\/session.module#SessionModule'},

{path:'' , 
pathMatch:'full',
redirectTo:'/login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
