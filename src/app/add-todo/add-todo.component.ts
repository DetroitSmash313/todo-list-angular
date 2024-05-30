import { Component, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'], 
})
export class AddTodoComponent {
  newTodoTitle: string = '';
  @Output() add = new EventEmitter<string>();

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.add.emit(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}

