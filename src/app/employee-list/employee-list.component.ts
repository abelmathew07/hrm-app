
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  fullName: string;
  position: string;
  qualification: string;
  place: string;
  email: string;
  phone: string;
  joiningDate: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [
    {
      id: 20241001,
      fullName: 'John Doe',
      position: 'Software Engineer',
      qualification: 'B.Tech',
      place: 'Kochi',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      joiningDate: '2023-01-15'
    },
    {
      id: 20241002,
      fullName: 'Jane Smith',
      position: 'Project Manager',
      qualification: 'M.Tech',
      place: 'Kochi',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      joiningDate: '2022-08-22'
    },
    {
      id: 20241003,
      fullName: 'Michael Johnson',
      position: 'HR Manager',
      qualification: 'MBA',
      place: 'Trivandrum',
      email: 'michael.johnson@example.com',
      phone: '456-789-1230',
      joiningDate: '2021-03-10'
    },
    {
      id: 20241004,
      fullName: 'Emily Davis',
      position: 'UI/UX Designer',
      qualification: 'B.Des',
      place: 'Ernakulam',
      email: 'emily.davis@example.com',
      phone: '321-654-9870',
      joiningDate: '2023-05-01'
    },
    {
      id: 20241005,
      fullName: 'Robert Wilson',
      position: 'DevOps Engineer',
      qualification: 'B.Tech',
      place: 'Kozhikode',
      email: 'robert.wilson@example.com',
      phone: '987-321-6540',
      joiningDate: '2020-09-12'
    },
    {
      id: 20241006,
      fullName: 'Sophia Martinez',
      position: 'QA Engineer',
      qualification: 'MCA',
      place: 'Kochi',
      email: 'sophia.martinez@example.com',
      phone: '789-123-4560',
      joiningDate: '2022-06-18'
    }
  ];

  selectedEmployee: Employee | null = null;

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  closeDetails() {
    this.selectedEmployee = null;
  }
}