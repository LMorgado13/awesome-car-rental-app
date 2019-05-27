import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';

const routes: Routes = [{
  path: '',pathMatch: 'full', redirectTo: '/home'
},{
  path: 'home',
  component:HomeComponent,
  pathMatch: 'full'
},
{
  path: 'auth-home',
  component:AuthHomeComponent
  
}
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
