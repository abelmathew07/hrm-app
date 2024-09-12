import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {
  @Input() clientName!: string;
  @Input() email!: string;
  @Input() img!: string;
}
