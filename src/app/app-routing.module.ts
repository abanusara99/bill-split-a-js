import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillInputComponent } from './bill-input/bill-input.component';
import { BillSplitComponent } from './bill-split/bill-split.component';

const routes: Routes = [
  { path: '', component: BillInputComponent },
  { path: 'result', component: BillSplitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
