import { Injectable } from '@angular/core';
import {Task} from 'src/app/shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  getTasks(): Task[];

  save(tasks: Task[]) {
  localStorage.setItem('tasks',JSON.stringify(tasks))
  }
}

