import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments = new BehaviorSubject<any[]>([
    { id: 1, name: 'HR', head: 'John Doe', employees: 25 },
    { id: 2, name: 'IT', head: 'Jane Smith', employees: 50 },
    { id: 3, name: 'Finance', head: 'Alice Johnson', employees: 40 },
{ id: 4, name: 'Marketing', head: 'Bob Brown', employees: 30 },
{ id: 5, name: 'Sales', head: 'Carol White', employees: 45 },
{ id: 6, name: 'Engineering', head: 'David Black', employees: 60 },
{ id: 7, name: 'Customer Support', head: 'Eva Green', employees: 35 },
{ id: 8, name: 'Legal', head: 'Frank Blue', employees: 20 },
{ id: 9, name: 'Product Management', head: 'Grace Red', employees: 25 },
{ id: 10, name: 'Design', head: 'Henry Yellow', employees: 15 }

  ]);

  private departments$ = this.departments.asObservable();

  getDepartments() {
    return this.departments$;
  }

  addDepartment(department: any) {
    const currentDepartments = this.departments.getValue();
    department.id = currentDepartments.length + 1;
    this.departments.next([...currentDepartments, department]);
  }

  updateDepartment(updatedDepartment: any) {
    const currentDepartments = this.departments.getValue();
    const index = currentDepartments.findIndex(d => d.id === updatedDepartment.id);
    if (index > -1) {
      currentDepartments[index] = updatedDepartment;
      this.departments.next([...currentDepartments]);
    }
  }

  deleteDepartment(id: number) {
    const currentDepartments = this.departments.getValue();
    const updatedDepartments = currentDepartments.filter(d => d.id !== id);
    this.departments.next(updatedDepartments);
  }
}
