import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';
import { AuthGuard } from './common/guards/auth.guard';
import { PublicGuard } from './common/guards/public.guard';

const routes: Routes = [{
  path: '',pathMatch: 'full', redirectTo: '/home'
},{
  path: 'home',
  component:HomeComponent,
  pathMatch: 'full',
  canActivate: [PublicGuard] 
},
{
  path: 'auth-home',
  component:AuthHomeComponent,
  canActivate: [AuthGuard]
},
//{
//  path: 'Vehicles/id',component:VehicleDetailsComponent
//}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
