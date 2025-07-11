import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TaskComponent {
  @Input() name: string | undefined;

  onEditTask() {
    throw new Error('Method not implemented.');
  }
}
