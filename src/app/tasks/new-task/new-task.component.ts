import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onCreateTask() {
    const taskData = {
      title: this.enteredTitle,
      dueDate: this.enteredDueDate,
      summary: this.enteredSummary,
    };
    this.tasksService.addTask(taskData, this.userId);
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
    this.close.emit();
  }
}
