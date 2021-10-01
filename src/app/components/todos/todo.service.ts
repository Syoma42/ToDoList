import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/models/todo.interface';

@Injectable()

export class TodoService {

  constructor(
    private _http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    const todos = localStorage.getItem('Todos');
    return (todos && todos.length) ? of(JSON.parse(todos)) : this._http.get<Todo[]>('assets/todos.json') 
  }

}
