import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPerformanceChartComponent } from './department-performance-chart.component';

describe('DepartmentPerformanceChartComponent', () => {
  let component: DepartmentPerformanceChartComponent;
  let fixture: ComponentFixture<DepartmentPerformanceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentPerformanceChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentPerformanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
