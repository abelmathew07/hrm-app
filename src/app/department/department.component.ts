import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from './department.service'; // Adjust path as needed

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule], // Import necessary modules for this component
})
export class DepartmentComponent implements OnInit {
  departments: any[] = [];
  searchQuery: string = '';
  selectedDepartment: any = null;

  departmentForm: FormGroup;

  constructor(private fb: FormBuilder, private departmentService: DepartmentService) {
    this.departmentForm = this.fb.group({
      name: [''],
      head: [''],
      employees: [''],
    });
  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
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
      this.departmentService.deleteDepartment(id);
    }
  }

  // Save or update department
  onDepartmentSave() {
    const departmentData = this.departmentForm.value;
    if (this.selectedDepartment) {
      this.departmentService.updateDepartment({ ...this.selectedDepartment, ...departmentData });
    } else {
      this.departmentService.addDepartment(departmentData);
    }
  }
}
