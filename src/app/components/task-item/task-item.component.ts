import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faBitcoin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faBitcoin = faBitcoin;

  constructor() {
  }


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  protected readonly ontoggle = ontoggle;

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
