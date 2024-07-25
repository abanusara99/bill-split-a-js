import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { FormsModule } from '@angular/forms'; // Import FormsModule

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    FormsModule // Include FormsModule here
  ]
})
.catch(err => console.error(err));
