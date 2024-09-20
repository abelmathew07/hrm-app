import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { paymentdata } from '../dashboard/dummydata'; // Adjust the import path as needed

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'] // Ensure this is styleUrls and not styleUrl
})
export class PaymentComponent {
  clients: any[] = [];

  constructor() {
    this.initializeClients();
  }

  // Method to initialize clients from the dummy data
  initializeClients() {
    // Define the type for groupedPayments
    const groupedPayments: { [key: string]: { name: string; payments: any[] } } = {};

    // Group payment data by client name
    paymentdata.forEach(payment => {
      // If the client name is not already in the accumulator, add it
      if (!groupedPayments[payment.clientName]) {
        groupedPayments[payment.clientName] = {
          name: payment.clientName,
          payments: []
        };
      }
      // Push the payment into the appropriate client's payments array
      groupedPayments[payment.clientName].payments.push(payment);
    });

    // Convert the grouped object into an array
    this.clients = Object.values(groupedPayments);
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
    // Implement further logic for invoice generation here
  }

  // Method to calculate total payments for a client
  calculateTotalPayments(client: any): number {
    return client.payments.reduce((total: number, payment: any) => total + payment.paidAmount, 0);
  }
}
