import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  clients = [
    {
      name: 'Client A',
      payments: [
        { invoiceId: 'INV-001', projectName: 'Project A', projectStatus: 'Ongoing', amount: 5000, paymentStatus: 'Paid', paymentDate: '2024-09-10' },
        { invoiceId: 'INV-002', projectName: 'Project B', projectStatus: 'Completed', amount: 7000, paymentStatus: 'Pending' },
      ]
    },
    {
      name: 'Client B',
      payments: [
        { invoiceId: 'INV-003', projectName: 'Project C', projectStatus: 'Ongoing', amount: 4000, paymentStatus: 'Paid', paymentDate: '2024-08-05' },
        { invoiceId: 'INV-004', projectName: 'Project D', projectStatus: 'Completed', amount: 6000, paymentStatus: 'Paid', paymentDate: '2024-07-20' },
      ]
    },
    {
      name: 'Client C',
      payments: [
        { invoiceId: 'INV-005', projectName: 'Project E', projectStatus: 'Ongoing', amount: 8000, paymentStatus: 'Pending' },
      ]
    },
    {
      name: 'Client D',
      payments: [
        { invoiceId: 'INV-007', projectName: 'Project G', projectStatus: 'Ongoing', amount: 3000, paymentStatus: 'Paid', paymentDate: '2024-08-10' },
        { invoiceId: 'INV-008', projectName: 'Project H', projectStatus: 'Completed', amount: 12000, paymentStatus: 'Pending' },
      ]
    },
    {
      name: 'Client E',
      payments: [
        { invoiceId: 'INV-009', projectName: 'Project I', projectStatus: 'Completed', amount: 15000, paymentStatus: 'Paid', paymentDate: '2024-07-25' },
        { invoiceId: 'INV-010', projectName: 'Project J', projectStatus: 'Ongoing', amount: 5000, paymentStatus: 'Pending' },
      ]
    },
    {
      name: 'Client F',
      payments: [
        { invoiceId: 'INV-011', projectName: 'Project K', projectStatus: 'Ongoing', amount: 2500, paymentStatus: 'Paid', paymentDate: '2024-09-05' },
      ]
    },
    {
      name: 'Client G',
      payments: [
        { invoiceId: 'INV-012', projectName: 'Project L', projectStatus: 'Completed', amount: 8000, paymentStatus: 'Pending' },
        { invoiceId: 'INV-013', projectName: 'Project M', projectStatus: 'Ongoing', amount: 7000, paymentStatus: 'Paid', paymentDate: '2024-09-12' },
        { invoiceId: 'INV-014', projectName: 'Project N', projectStatus: 'Completed', amount: 9000, paymentStatus: 'Paid', paymentDate: '2024-08-28' },
      ]
    },
    {
      name: 'Client H',
      payments: [
        { invoiceId: 'INV-015', projectName: 'Project O', projectStatus: 'Ongoing', amount: 4000, paymentStatus: 'Pending' },
        { invoiceId: 'INV-016', projectName: 'Project P', projectStatus: 'Completed', amount: 11000, paymentStatus: 'Paid', paymentDate: '2024-09-08' },
      ]
    },
    {
      name: 'Client I',
      payments: [
        { invoiceId: 'INV-017', projectName: 'Project Q', projectStatus: 'Ongoing', amount: 5000, paymentStatus: 'Pending' },
      ]
    },
    {
      name: 'Client J',
      payments: [
        { invoiceId: 'INV-018', projectName: 'Project R', projectStatus: 'Completed', amount: 13000, paymentStatus: 'Paid', paymentDate: '2024-07-30' },
        { invoiceId: 'INV-019', projectName: 'Project S', projectStatus: 'Ongoing', amount: 6000, paymentStatus: 'Pending' },
        { invoiceId: 'INV-020', projectName: 'Project T', projectStatus: 'Completed', amount: 14000, paymentStatus: 'Paid', paymentDate: '2024-08-15' },
      ]
    }
  ];

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
}
