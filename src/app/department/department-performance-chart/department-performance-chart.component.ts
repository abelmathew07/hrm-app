import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-department-performance-chart',
  templateUrl: './department-performance-chart.component.html',
  styleUrls: ['./department-performance-chart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DepartmentPerformanceChartComponent implements OnChanges {
  @Input() performanceData: { department: string; score: number; }[] = [];

  private chart: Chart | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['performanceData']) {
      this.renderChart();
    }
  }

  private renderChart() {
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); // Destroy the existing chart if it exists
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HR', 'IT', 'MARKETING','DESIGN'], // Example labels
        datasets: [{
          label: 'Department Performance', 
          data: [30, 80, 30,60], // Example data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1.5,
          barThickness:55
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  }
}
