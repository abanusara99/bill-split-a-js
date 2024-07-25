// src/app/models/bill-item.model.ts
export interface BillItem {
    name: string;
    quantity: number;
    price: number;
    amount: number;
    category: 'Veg' | 'Non-Veg' | 'Drinks' | 'Non-Drinks';
  }
  