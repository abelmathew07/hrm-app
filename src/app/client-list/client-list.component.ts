import { Component } from '@angular/core';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { CommonModule } from '@angular/common';
import { clientdata } from '../dashboard/dummydata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, ClientDetailComponent,FormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  clients = clientdata;
  isAddClientModalOpen = false;

  newClient = {
    clientName: '',
    email: '',
    img: '',
    projectName: '',
    phone: '',
    id: 0
  };

  openAddClientModal() {
    this.isAddClientModalOpen = true;
  }

  closeAddClientModal() {
    this.isAddClientModalOpen = false;
    this.resetForm();
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newClient.img = e.target.result; 
      };
      reader.readAsDataURL(file);
    }
  }

  addClient() {
    if (this.newClient.clientName && this.newClient.email && this.newClient.img &&
        this.newClient.projectName && this.newClient.phone) {

      this.newClient.id = this.clients.length + 1;
      this.clients.push({ ...this.newClient });
      this.closeAddClientModal();
    }
  }

  resetForm() {
    this.newClient = {
      clientName: '',
      email: '',
      img: '',
      projectName: '',
      phone: '',
      id: 0
    };
  }
}

