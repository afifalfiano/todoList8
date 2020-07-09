import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todos;
  addTodo;
  todoList;

  constructor() {
    this.addTodo = '';
    this.todos = [];

  }

  todoSubmit(event) {
    this.todoList = {
      addTodo: this.addTodo,
    };
    this.todos.push(this.todoList.addTodo);
    this.addTodo = '';
    // console.log(this.todos);
    event.preventDefault();

  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteAll(index) {
    const todoLength = this.todos.length;
    this.todos.splice(index, todoLength);
  }
}
