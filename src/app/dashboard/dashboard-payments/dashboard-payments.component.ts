import { Component } from '@angular/core';
import { paymentdata } from '../dummydata';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard-payments',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './dashboard-payments.component.html',
  styleUrl: './dashboard-payments.component.css'
})
export class DashboardPaymentsComponent {
  payments = paymentdata;
}
