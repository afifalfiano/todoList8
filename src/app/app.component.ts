import { Component, OnInit, TemplateRef } from '@angular/core';
import * as moment from 'moment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist';
  todos;
  addTodo;
  todoList;
  Time;
  modalRef: BsModalRef;


  constructor(
    private modalSvc: BsModalService
  ) {
    this.addTodo = '';
    this.todos = [];

  }

  ngOnInit() {
    this.Time = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  showModal(template) {
    this.modalRef = this.modalSvc.show(template);

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
