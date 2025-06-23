import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = new Admin();
  erroMessage = '';
  ted:boolean=false;
  
  constructor(private adminService:AdminService,private routerObj:Router, private authService: AuthService,) {
    
   }
  
  ngOnInit(): void {
  }

  loginAdmin(){
     
    this.adminService.loginAdminFromRest(this.admin).subscribe(
      data=>{
        console.log("User successfully logged IN")

        localStorage.setItem('adminEmail',this.admin.admin_email);
        localStorage.setItem('adminName',this.admin.admin_name);
        // this.authService.login(response.token); 
        // this.routerObj.navigate(['admin/home']), { replaceUrl: true });
        this.routerObj.navigate(['admin/home'], { replaceUrl: true });
      },
      error => {
        console.log("Exception occured")
        // this.erroMessage = "Bad credentails, Please Enter the correct ones"
        if (error.status === 401) {
        // this.erroMessage = "Invalid credentials. Please try again.";
        alert("Invalid credentials. Please try again.");
      } else if (error.status === 404) {
        alert("User not found. Please register first.");
      } else if (error.status === 500) {
         alert("Server error. Please try again later.");
      }else{
        alert("Something went wrong. Please try again later.");
      }
      }
      )
      
  }

}
