import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminService } from './components/admin/admin.service';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { PricingComponent } from './components/pricing/pricing.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    AdminRegisterComponent,
    NavbarComponent,
    AdminHomeComponent,
    ContactComponent,
    AboutComponent,
    PricingComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
