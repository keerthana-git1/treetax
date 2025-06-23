import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  adminEmail = localStorage.getItem('adminEmail');

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // checks adminEmail/token
  }

  logout(): void {
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminName');
    this.router.navigate(['/admin/login'], { replaceUrl: true });
  }

  getAdminName(): string | null {
    return localStorage.getItem('adminName');
  }
  ngOnInit(): void {
  }

}
