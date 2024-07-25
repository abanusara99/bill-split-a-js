import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for router-outlet
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet] // Add RouterOutlet here
})
export class AppComponent {
  title = 'bill-splitter';
}
