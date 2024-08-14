import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiComponent } from '@angular-studies/shared-ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedUiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'exercise-project';
}
