import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';


import { NoAuthGuard } from './components/admin/no-auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'home/',component:HomePageComponent},
  {path:'login',component:LoginComponent,canActivate: [NoAuthGuard]},
  {path:'admin/register',component:AdminRegisterComponent,canActivate: [NoAuthGuard]},
  {path:'admin/home',component:AdminHomeComponent},
  {path:'contacts',component:ContactComponent},
  {path:'about',component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
