import { Component } from '@angular/core';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { CommonModule } from '@angular/common';
import { clientdata } from '../dashboard/dummydata';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, ClientDetailComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  clients = clientdata;
}
