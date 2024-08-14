import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTask, Task} from "../task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';
  private tasksService = inject(TasksService);

  onCloseDialog() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.tasksService.addTask({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate}, this.userId)
    this.closeDialog.emit();
  }
}
