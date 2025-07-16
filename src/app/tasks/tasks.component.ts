import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string | undefined;
  @Input({ required: true }) name!: string | undefined;

  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      dueDate: '2023-10-01',
      summary: 'This is the first task.',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      dueDate: '2023-10-01',
      summary: 'This is the second task.',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      dueDate: '2023-10-01',
      summary: 'This is the third task.',
    },
  ]; // Example task array

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(`Task with ID ${taskId} completed and removed from the list.`);
  }

  onStartAddtask() {
    this.isAddingTask = true;
  }
}
