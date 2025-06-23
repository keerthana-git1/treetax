import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  admin = new Admin();
  response='';
  constructor(private adminService:AdminService,private routerObj:Router) { }

  ngOnInit(): void {
  }

  registerAdmin(){
    this.adminService.registerAdminRest(this.admin).subscribe(
      
      data =>{ console.log("Registered successfully")
        localStorage.setItem('adminEmail',this.admin.admin_email);
        localStorage.setItem('adminName',this.admin.admin_name);
      this.routerObj.navigate(['admin/home'], { replaceUrl: true });
      // this.routerObj.navigate(['admin/login'])
      },
      error => { 
  console.log("Exception occurred:", error);
  this.response = error.error?.message || "An unexpected error occurred.";
}
      
    );
  }

}
