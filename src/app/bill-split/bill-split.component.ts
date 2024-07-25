import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-bill-split',
  templateUrl: './bill-split.component.html',
  styleUrls: ['./bill-split.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule for pipes and directives
})

export class BillSplitComponent implements OnInit {
  billSummary: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve data from the router state
    this.billSummary = history.state.billSummary;
  }
}
