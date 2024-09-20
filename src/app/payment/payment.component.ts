import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { paymentdata } from '../dashboard/dummydata'; // Adjust the import path as needed
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgIf, NgFor,FormsModule, CurrencyPipe],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  clients: any[] = [];
  filteredClients: any[] = [];
  clientSearch: string = '';

  constructor() {
    this.initializeClients();
  }

  // Method to initialize clients from the dummy data
  initializeClients() {
    const groupedPayments: { [key: string]: { name: string; payments: any[] } } = {};

    // Group payment data by client name
    paymentdata.forEach(payment => {
      if (!groupedPayments[payment.clientName]) {
        groupedPayments[payment.clientName] = {
          name: payment.clientName,
          payments: []
        };
      }
      groupedPayments[payment.clientName].payments.push(payment);
    });

    // Convert the grouped object into an array
    this.clients = Object.values(groupedPayments);
    this.filteredClients = [...this.clients];
  }

  selectedClient: any = null;

  // Method to toggle payment details display
  showClientPayments(client: any) {
    this.selectedClient = this.selectedClient === client ? null : client;
  }

  // Method to generate invoice
  generateInvoice(invoiceId: string, event: Event) {
    event.stopPropagation(); // Prevent card click event
    alert(`Invoice for ${invoiceId} generated!`);
  }

  // Method to calculate total payments for a client
  calculateTotalPayments(client: any): number {
    return client.payments.reduce((total: number, payment: any) => total + payment.paidAmount, 0);
  }

  // Method to filter clients by name
  filterByClientName() {
    const searchValue = this.clientSearch.toLowerCase();
    this.filteredClients = this.clients.filter(client =>
      client.name.toLowerCase().includes(searchValue)
    );
  }
}
