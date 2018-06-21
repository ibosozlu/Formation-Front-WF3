import { Component } from '@angular/core';
import {Task} from 'src/app/shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];

  newTask(task: Task) {
    this.tasks.push(task);
  }

  taskIsDone(task: Task) {
  //  Je passe la tâche de l'utilisateur a true.
    task.status =true;
  }
}

// On déclare notre tableau de tâches
