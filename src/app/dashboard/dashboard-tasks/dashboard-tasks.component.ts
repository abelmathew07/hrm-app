import { Component } from '@angular/core';
import { taskStatistics } from '../dummydata';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-tasks.component.html',
  styleUrl: './dashboard-tasks.component.css'
})
export class DashboardTasksComponent {
  taskStats = taskStatistics[0];
}
