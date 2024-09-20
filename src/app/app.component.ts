import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

import { SidebarComponent } from "./sidebar/sidebar.component";

import { DashboardClientsComponent } from './dashboard/dashboard-clients/dashboard-clients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hrm-app';
  // username = '';
  // password = '';

  // constructor(private authService: AuthService, private router: Router) {}

  // onLogin() {
  //   if (this.authService.login(this.username, this.password)) {
  //     this.router.navigate(['/dashboard']); // Navigate to dashboard after login
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }
}

