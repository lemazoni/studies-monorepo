import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { SharedUiComponent } from '@angular-studies/shared-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent, SharedUiComponent]
})
export class AppComponent {}
