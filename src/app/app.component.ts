import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule // Import RouterModule if using <router-outlet> in template
  ]
})
export class AppComponent {
  title = 'your-project-name';
}
