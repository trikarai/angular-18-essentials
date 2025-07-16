import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() taskAdded = new EventEmitter<{
    title: string;
    dueDate: string;
    summary: string;
  }>();
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onCreateTask() {
    const taskData = {
      title: this.enteredTitle(),
      dueDate: this.enteredDueDate(),
      summary: this.enteredSummary(),
    };
    this.taskAdded.emit(taskData);
    this.enteredTitle = signal('');
    this.enteredSummary = signal('');
    this.enteredDueDate = signal('');
  }
}
