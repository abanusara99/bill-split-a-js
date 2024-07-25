import { Router } from '@angular/router';
import { BillCalculatorService } from '../services/bill-calculator.service';
import { BillItem } from '../models/bill-item.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add FormsModule here
})
export class BillInputComponent {
  billItems: BillItem[] = [];
  numPeople: number = 1;

  constructor(private billCalculator: BillCalculatorService, private router: Router) {}

  addItem() {
    this.billItems.push({ name: '', quantity: 1, price: 0, amount: 0, category: 'Veg' });
  }

  submitBill() {
    this.billItems.forEach(item => item.amount = item.quantity * item.price);
    const result = this.billCalculator.calculateSplit(this.billItems, this.numPeople);

    this.router.navigate(['/result'], { state: { billSummary: result } });
  }
}
