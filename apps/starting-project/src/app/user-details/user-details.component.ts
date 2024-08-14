import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTask} from "./task.model";
import {TasksService} from "./tasks.service";



@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input({required: true})userId!: string;
  @Input({required: true}) name:string | undefined;
  addingTask = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  addNewTask() {
    this.addingTask = true;
  }

  closeNewTask() {
    this.addingTask = false;
  }
}
