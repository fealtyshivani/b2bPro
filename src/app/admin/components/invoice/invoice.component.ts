import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  constructor(private renderer: Renderer2) { }

  printElement(): void {
    const printContents = document?.getElementById('invoice-table')?.innerHTML;
    const originalContents = document.body.innerHTML;

    this.renderer.setProperty(document.body, 'innerHTML', printContents);
    window.print();
    this.renderer.setProperty(document.body, 'innerHTML', originalContents);
  }
}
