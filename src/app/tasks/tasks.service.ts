import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      userId,
      ...taskData,
    };
    this.tasks.unshift(newTask);
    console.log(`New task added for user ${userId}:`, newTask);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(`Task with ID ${taskId} completed and removed from the list.`);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
