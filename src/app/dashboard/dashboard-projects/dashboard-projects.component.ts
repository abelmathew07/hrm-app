import { Component } from '@angular/core';
import { projectdata } from '../dummydata';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard-projects',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './dashboard-projects.component.html',
  styleUrl: './dashboard-projects.component.css'
})
export class DashboardProjectsComponent {
  projects = projectdata;
}
