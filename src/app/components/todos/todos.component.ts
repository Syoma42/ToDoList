import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo: string;
  
  constructor( private _todoService: TodoService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this._todoService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }

  toggleDone (id: number): void {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed
      return v
    })
  }

  deleteTodo (id: number): void {
    this.todos = this.todos.filter((v, i) => i !== id)
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = "";
  }

}
