import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];
  
  inputTodo: string;
  
  constructor( private _todoService: TodoService) { }

  ngOnInit(): void {
    this.getData();
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  getData(): void {
    this._todoService.getTodos().subscribe(res => {
      this.todos = res;
    })

  }

  toggleDone (todo: Todo): void {
    todo.completed = !todo.completed
  }

  deleteTodo (id: number): void {
    this.todos.splice(id, 1)
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = "";
  }

  ngOnDestroy() {
    localStorage.setItem('Todos', JSON.stringify(this.todos))
  }
  

}
