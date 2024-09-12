import { Component } from '@angular/core';
import { clientdata } from '../dummydata';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard-clients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard-clients.component.html',
  styleUrl: './dashboard-clients.component.css'
})
export class DashboardClientsComponent {
  clients = clientdata;
}
