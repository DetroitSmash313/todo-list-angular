import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  addTodo(title: string): void {
    this.todoService.addTodo(title);
  }
}