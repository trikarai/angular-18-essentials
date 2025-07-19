import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [
    // Import necessary Angular modules here, such as FormsModule if needed
    // BrowserModule, CommonModule, etc. can be imported if required
    SharedModule,
    CommonModule, // CommonModule is needed for common directives like ngIf, ngFor
    FormsModule,
  ],
  providers: [],
})
export class TasksModule {
  // This module is responsible for managing tasks in the application.
  // It imports necessary Angular modules and declares components related to tasks.

  constructor() {
    // Initialization logic can go here if needed.
  }
}
