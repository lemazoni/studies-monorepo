import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent, ReactiveFormsModule],
  providers: [taskStatusOptionsProvider]

})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private _tasksService = inject(TasksService);
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = computed(() =>{
    switch (this.selectedFilter()){
      case 'all': return this._tasksService.allTasks();
      case 'open': return this._tasksService.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress': return this._tasksService.allTasks().filter((task) => task.status === 'IN_PROGRESS');
      case 'done': return this._tasksService.allTasks().filter((task) => task.status === 'DONE');
      default: return  this._tasksService.allTasks();
    }
  })

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
