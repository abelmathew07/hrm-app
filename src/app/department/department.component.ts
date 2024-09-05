import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule], // Import necessary modules for this component
})
export class DepartmentComponent {
  departments = [
    { id: 1, name: 'HR', head: 'John Doe', employees: 25 },
    { id: 2, name: 'IT', head: 'Jane Smith', employees: 50 },
    // Add more departments if needed
  ];

  searchQuery: string = '';
  selectedDepartment: any = null;

  departmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.departmentForm = this.fb.group({
      name: [''],
      head: [''],
      employees: [''],
    });
  }

  // Filter departments based on search query
  filteredDepartments() {
    if (!this.searchQuery) {
      return this.departments;
    }
    return this.departments.filter((department) =>
      department.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Open the modal to add a new department
  openAddDepartmentModal() {
    this.selectedDepartment = null;
    this.departmentForm.reset();
  }

  // Edit department details
  editDepartment(department: any) {
    this.selectedDepartment = department;
    this.departmentForm.patchValue(department); // Pre-fill form with department data
  }

  // Delete department
  deleteDepartment(id: number) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departments = this.departments.filter(d => d.id !== id);
    }
  }

  // Save or update department
  onDepartmentSave() {
    const departmentData = this.departmentForm.value;
    if (this.selectedDepartment) {
      Object.assign(this.selectedDepartment, departmentData);
    } else {
      departmentData.id = this.departments.length + 1;
      this.departments.push(departmentData);
    }
  }
}
