import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { projectdata, clientdata } from '../dashboard/dummydata'; // Adjust the path as necessary

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  // Combine projectdata and clientdata
  projects = projectdata.map(project => {
    // Find the client associated with this project by matching projectName
    const client = clientdata.find(client => client.projectName === project.projectName);
    
    return {
      name: project.projectName,
      status: project.status,
      deadline: project.deadline, // Use deadline from projectdata
      clientName: client ? client.clientName : 'Unknown Client', // Get client name from clientdata
    };
  });

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
