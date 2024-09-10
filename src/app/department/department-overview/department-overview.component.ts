import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../department.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.css'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule here
})
export class DepartmentOverviewComponent implements OnInit {
  totalDepartments$: Observable<number>;
  totalEmployees$: Observable<number>;

  constructor(private departmentService: DepartmentService) {
    // Initialize properties with empty observables
    this.totalDepartments$ = new Observable();
    this.totalEmployees$ = new Observable();
  }

  ngOnInit() {
    this.totalDepartments$ = this.departmentService.getDepartments().pipe(
      map(departments => departments.length)
    );

    this.totalEmployees$ = this.departmentService.getDepartments().pipe(
      map(departments => departments.reduce((total, department) => total + department.employees, 0))
    );
  }
}
