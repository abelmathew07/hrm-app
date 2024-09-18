import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    { name: 'Project A', status: 'Ongoing', deadline: '2024-12-31', clientName: 'Client A', assignedDate: '2024-01-01', paymentStatus: 'Pending' },
    { name: 'Project B', status: 'Completed', deadline: '2024-06-30', clientName: 'Client B', assignedDate: '2024-02-15', paymentStatus: 'Completed' },
    { name: 'Project C', status: 'Ongoing', deadline: '2024-09-15', clientName: 'Client C', assignedDate: '2024-03-20', paymentStatus: 'Pending' },
    { name: 'Project D', status: 'On Hold', deadline: '2025-01-10', clientName: 'Client D', assignedDate: '2024-04-25', paymentStatus: 'Pending' },
    { name: 'Project E', status: 'Ongoing', deadline: '2024-11-20', clientName: 'Client E', assignedDate: '2024-05-15', paymentStatus: 'Pending' },
    { name: 'Project F', status: 'Completed', deadline: '2024-08-25', clientName: 'Client F', assignedDate: '2024-06-10', paymentStatus: 'Completed' },
    { name: 'Project G', status: 'Ongoing', deadline: '2024-12-05', clientName: 'Client G', assignedDate: '2024-07-05', paymentStatus: 'Pending' },
    { name: 'Project H', status: 'On Hold', deadline: '2025-03-30', clientName: 'Client H', assignedDate: '2024-08-01', paymentStatus: 'Pending' },
    { name: 'Project I', status: 'Ongoing', deadline: '2024-10-15', clientName: 'Client I', assignedDate: '2024-09-01', paymentStatus: 'Pending' },
    { name: 'Project J', status: 'Completed', deadline: '2024-07-15', clientName: 'Client J', assignedDate: '2024-02-05', paymentStatus: 'Completed' }
  ];

  // To handle filtering
  filteredProjects = [...this.projects];

  selectedProject: any = null;

  // Method to toggle project details display
  showProjectDetails(project: any) {
    this.selectedProject = this.selectedProject === project ? null : project;
  }

  // Filtering Method
  filterByStatus(status: string) {
    this.filteredProjects = this.projects.filter(project => project.status === status);
  }

  // Clear Filters
  clearFilters() {
    this.filteredProjects = [...this.projects];
  }
}
