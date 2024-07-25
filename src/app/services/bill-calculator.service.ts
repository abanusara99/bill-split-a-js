// src/app/services/bill-calculator.service.ts
import { Injectable } from '@angular/core';
import { BillItem } from '../models/bill-item.model';

@Injectable({
  providedIn: 'root',
})
export class BillCalculatorService {
  calculateSplit(items: BillItem[], numPeople: number) {
    let subTotal = 0;
    let totalTax = 0;
    let totalServiceCharge = 0;
    let taxRate = 0.05;
    let serviceChargeRate = 0.05;

    items.forEach(item => {
      subTotal += item.amount;
    });

    totalTax = subTotal * taxRate;
    totalServiceCharge = subTotal * serviceChargeRate;

    const grandTotal = subTotal + totalTax + totalServiceCharge;
    const perPersonShare = grandTotal / numPeople;

    return {
      subTotal,
      totalTax,
      totalServiceCharge,
      grandTotal,
      perPersonShare
    };
  }
}
