import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NgFor] // or CommonModule
})
export class DashboardComponent {
  employeeCount = 150;
  departmentCount = 12;
  recentActivities = [
    'John Doe was promoted to Senior Developer',
    'New policy update in HR department',
    'Company townhall scheduled for next week'
  ];

  constructor() {}
}
