import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { projectdata, clientdata } from '../dashboard/dummydata'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms';

interface Project {
  id: number;
  name: string;
  status: string;
  deadline: string;
  clientName: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, NgFor,FormsModule,NgClass],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = projectdata.map((project, index) => {
    const client = clientdata.find(client => client.projectName === project.projectName);
    
    return {
      id: index + 1, // Assign a unique ID
      name: project.projectName,
      status: project.status,
      deadline: project.deadline,
      clientName: client ? client.clientName : 'Unknown Client',
    };
  });

  filteredProjects = [...this.projects];
  selectedProject: Project | null = null;

  isAddProjectModalOpen = false;

  newProject: Project = {
    id: 0, // Placeholder value
    name: '',
    status: 'Active',
    deadline: '',
    clientName: ''
  };

  showProjectDetails(project: Project) {
    this.selectedProject = this.selectedProject === project ? null : project;
  }

  filterByStatus(status: string) {
    this.filteredProjects = this.projects.filter(project => project.status === status);
  }

  clearFilters() {
    this.filteredProjects = [...this.projects];
  }

  openAddProjectModal() {
    this.isAddProjectModalOpen = true;
  }

  closeAddProjectModal() {
    this.isAddProjectModalOpen = false;
    this.resetNewProject();
  }

  addProject() {
    if (this.newProject.name && this.newProject.clientName) {
      const newId = this.projects.length + 1; // Generate a new ID
      this.projects.push({ ...this.newProject, id: newId });
      this.filteredProjects = [...this.projects];
      this.closeAddProjectModal();
    }
  }

  resetNewProject() {
    this.newProject = {
      id: 0,
      name: '',
      status: 'Active',
      deadline: '',
      clientName: ''
    };
  }
}
