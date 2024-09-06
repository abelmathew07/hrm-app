

// import { NgFor, NgIf } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// interface Employee {
//   id: number;
//   fullName: string;
//   position: string;
//   qualification: string;
//   place: string;
//   email: string;
//   phone: string;
//   joiningDate: string;
// }

// @Component({
//   selector: 'app-employee-list',
//   standalone: true,
//   imports: [NgFor, NgIf, FormsModule], // Include FormsModule here
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css']
// })
// export class EmployeeListComponent {
  
//       employees: Employee[] = [
//         { id: 20241001, fullName: 'John Doe', position: 'Software Engineer', qualification: 'B.Tech', place: 'Kochi', email: 'john.doe@example.com', phone: '123-456-7890', joiningDate: '2023-01-15' },
//         { id: 20241002, fullName: 'Jane Smith', position: 'Project Manager', qualification: 'M.Tech', place: 'Kochi', email: 'jane.smith@example.com', phone: '987-654-3210', joiningDate: '2022-08-22' },
//         { id: 20241003, fullName: 'Michael Johnson', position: 'HR Manager', qualification: 'MBA', place: 'Trivandrum', email: 'michael.johnson@example.com', phone: '456-789-1230', joiningDate: '2021-03-10' },
//         { id: 20241004, fullName: 'Emily Davis', position: 'UI/UX Designer', qualification: 'B.Des', place: 'Ernakulam', email: 'emily.davis@example.com', phone: '321-654-9870', joiningDate: '2023-05-01' },
//         { id: 20241005, fullName: 'Robert Wilson', position: 'DevOps Engineer', qualification: 'B.Tech', place: 'Kozhikode', email: 'robert.wilson@example.com', phone: '987-321-6540', joiningDate: '2020-09-12' },
//         { id: 20241006, fullName: 'Sophia Martinez', position: 'QA Engineer', qualification: 'MCA', place: 'Kochi', email: 'sophia.martinez@example.com', phone: '789-123-4560', joiningDate: '2022-06-18' },
//         { id: 20241007, fullName: 'Daniel Brown', position: 'Backend Developer', qualification: 'B.Tech', place: 'Thrissur', email: 'daniel.brown@example.com', phone: '654-321-9870', joiningDate: '2023-02-25' },
//         { id: 20241008, fullName: 'Laura Green', position: 'Frontend Developer', qualification: 'B.Tech', place: 'Kollam', email: 'laura.green@example.com', phone: '654-987-3210', joiningDate: '2021-07-13' },
//         { id: 20241009, fullName: 'James White', position: 'Product Manager', qualification: 'MBA', place: 'Alappuzha', email: 'james.white@example.com', phone: '321-987-6540', joiningDate: '2019-11-30' },
//         { id: 20241010, fullName: 'Rachel Adams', position: 'Data Scientist', qualification: 'PhD', place: 'Palakkad', email: 'rachel.adams@example.com', phone: '123-654-7890', joiningDate: '2020-03-20' },
//         { id: 20241011, fullName: 'David Clark', position: 'Network Engineer', qualification: 'B.Tech', place: 'Kannur', email: 'david.clark@example.com', phone: '789-321-6540', joiningDate: '2021-09-25' },
//         { id: 20241012, fullName: 'Emma King', position: 'System Analyst', qualification: 'M.Sc', place: 'Kottayam', email: 'emma.king@example.com', phone: '987-654-1230', joiningDate: '2022-05-15' },
//         { id: 20241013, fullName: 'Henry Scott', position: 'Cybersecurity Specialist', qualification: 'B.Tech', place: 'Malappuram', email: 'henry.scott@example.com', phone: '321-456-7890', joiningDate: '2023-07-11' },
//         { id: 20241014, fullName: 'Grace Lee', position: 'Business Analyst', qualification: 'MBA', place: 'Wayanad', email: 'grace.lee@example.com', phone: '123-789-4560', joiningDate: '2022-02-02' },
//         { id: 20241015, fullName: 'Oliver Harris', position: 'AI Engineer', qualification: 'M.Tech', place: 'Idukki', email: 'oliver.harris@example.com', phone: '654-123-7890', joiningDate: '2021-10-08' }
//       ];

//   selectedEmployee: Employee | null = null;
//   newEmployee: Employee | null = null;
//   filterDepartment: string = '';

//   // Select an employee from the list
//   selectEmployee(employee: Employee) {
//     this.selectedEmployee = employee;
//   }

//   // Close employee details
//   closeDetails() {
//     this.selectedEmployee = null;
//   }

//   // Initialize a new employee
//   initNewEmployee() {
//     this.newEmployee = {
//       id: 0,
//       fullName: '',
//       position: '',
//       qualification: '',
//       place: '',
//       email: '',
//       phone: '',
//       joiningDate: ''
//     };
//   }

//   // Add the new employee to the list
//   addEmployee() {
//     if (this.newEmployee) {
//       this.newEmployee.id = Date.now(); // Generate a unique ID
//       this.employees.push(this.newEmployee);
//       this.newEmployee = null;
//     }
//   }

//   // Filter employees by department
//   get filteredEmployees(): Employee[] {
//     if (this.filterDepartment) {
//       return this.employees.filter(emp => emp.position === this.filterDepartment);
//     }
//     return this.employees;
//   }
// }



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
  imports: [NgFor, NgIf, FormsModule], // Include FormsModule here
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  
  employees: Employee[] = [
            { id: 20241001, fullName: 'John Doe', position: 'Software Engineer', qualification: 'B.Tech', place: 'Kochi', email: 'john.doe@example.com', phone: '123-456-7890', joiningDate: '2023-01-15', photoUrl: '\emp1.jpg' },
            { id: 20241002, fullName: 'Jane Smith', position: 'Project Manager', qualification: 'M.Tech', place: 'Kochi', email: 'jane.smith@example.com', phone: '987-654-3210', joiningDate: '2022-08-22', photoUrl: '\emp2.jpeg' },
            { id: 20241003, fullName: 'Michael Johnson', position: 'HR Manager', qualification: 'MBA', place: 'Trivandrum', email: 'michael.johnson@example.com', phone: '456-789-1230', joiningDate: '2021-03-10', photoUrl: '\emp3.jpeg' },
            { id: 20241004, fullName: 'Emily Davis', position: 'UI/UX Designer', qualification: 'B.Des', place: 'Ernakulam', email: 'emily.davis@example.com', phone: '321-654-9870', joiningDate: '2023-05-01', photoUrl: '\emp4.jpeg' },
            { id: 20241005, fullName: 'Robert Wilson', position: 'DevOps Engineer', qualification: 'B.Tech', place: 'Kozhikode', email: 'robert.wilson@example.com', phone: '987-321-6540', joiningDate: '2020-09-12', photoUrl: '\emp5.jpeg' },
            { id: 20241006, fullName: 'Sophia Martinez', position: 'QA Engineer', qualification: 'MCA', place: 'Kochi', email: 'sophia.martinez@example.com', phone: '789-123-4560', joiningDate: '2022-06-18', photoUrl: '\emp6.jpg' },
            { id: 20241007, fullName: 'Daniel Brown', position: 'Backend Developer', qualification: 'B.Tech', place: 'Thrissur', email: 'daniel.brown@example.com', phone: '654-321-9870', joiningDate: '2023-02-25', photoUrl: '\emp7.jpeg' },
            { id: 20241008, fullName: 'Laura Green', position: 'Frontend Developer', qualification: 'B.Tech', place: 'Kollam', email: 'laura.green@example.com', phone: '654-987-3210', joiningDate: '2021-07-13', photoUrl: '\emp8.jpeg' },
            { id: 20241009, fullName: 'James White', position: 'Product Manager', qualification: 'MBA', place: 'Alappuzha', email: 'james.white@example.com', phone: '321-987-6540', joiningDate: '2019-11-30', photoUrl: '\emp9.jpg' },
            { id: 20241010, fullName: 'Rachel Adams', position: 'Data Scientist', qualification: 'PhD', place: 'Palakkad', email: 'rachel.adams@example.com', phone: '123-654-7890', joiningDate: '2020-03-20', photoUrl: '\emp10.jpg' },
            { id: 20241011, fullName: 'David Clark', position: 'Network Engineer', qualification: 'B.Tech', place: 'Kannur', email: 'david.clark@example.com', phone: '789-321-6540', joiningDate: '2021-09-25', photoUrl: '\emp11.jpg' },
            { id: 20241012, fullName: 'Emma King', position: 'System Analyst', qualification: 'M.Sc', place: 'Kottayam', email: 'emma.king@example.com', phone: '987-654-1230', joiningDate: '2022-05-15', photoUrl: '\emp12.jpg' },
            { id: 20241013, fullName: 'Henry Scott', position: 'Cybersecurity Specialist', qualification: 'B.Tech', place: 'Malappuram', email: 'henry.scott@example.com', phone: '321-456-7890', joiningDate: '2023-07-11', photoUrl: '\emp13.jpeg' },
            { id: 20241014, fullName: 'Grace Lee', position: 'Business Analyst', qualification: 'MBA', place: 'Wayanad', email: 'grace.lee@example.com', phone: '123-789-4560', joiningDate: '2022-02-02', photoUrl: '\emp14.jpeg' },
            { id: 20241015, fullName: 'Oliver Harris', position: 'AI Engineer', qualification: 'M.Tech', place: 'Idukki', email: 'oliver.harris@example.com', phone: '654-123-7890', joiningDate: '2021-10-08', photoUrl: '\emp15.webp' }
          ];

          onPhotoSelected(event: any) {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e: any) => {
                this.newEmployee.photoUrl = e.target.result;
              };
              reader.readAsDataURL(file);
            }
          }


  selectedEmployee: Employee | null = null;
  newEmployee: Employee = {
    id: 0,
    fullName: '',
    position: '',
    qualification: '',
    place: '',
    email: '',
    phone: '',
    joiningDate: '',
    photoUrl: ''
  };
  filterDepartment: string = '';

  // Open modal for adding a new employee
  openModal() {
    this.newEmployee = {
      id: 0,
      fullName: '',
      position: '',
      qualification: '',
      place: '',
      email: '',
      phone: '',
      joiningDate: ''
    };
    const modal = new window.bootstrap.Modal(document.getElementById('addEmployeeModal')!);
    modal.show();
  }

  // Select an employee from the list
  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  // Close employee details
  closeDetails() {
    this.selectedEmployee = null;
  }

  // Add the new employee to the list
  addEmployee() {
    if (this.newEmployee) {
      this.newEmployee.id = Date.now(); // Generate a unique ID
      this.employees.push(this.newEmployee);
      this.newEmployee = {
        id: 0,
        fullName: '',
        position: '',
        qualification: '',
        place: '',
        email: '',
        phone: '',
        joiningDate: '',
         photoUrl: ''
      };
      const modalElement = document.getElementById('addEmployeeModal');
      const modal = window.bootstrap.Modal.getInstance(modalElement!); // Get the modal instance
      modal?.hide();
    }
  }


  // Filter employees by department
  get filteredEmployees(): Employee[] {
    if (this.filterDepartment) {
      return this.employees.filter(emp => emp.position === this.filterDepartment);
    }
    return this.employees;
  }
}
