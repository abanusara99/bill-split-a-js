import { Routes } from '@angular/router';
import { BillInputComponent } from './bill-input/bill-input.component';
import { BillSplitComponent } from './bill-split/bill-split.component';

export const routes: Routes = [
  { path: '', component: BillInputComponent },
  { path: 'result', component: BillSplitComponent }
];
