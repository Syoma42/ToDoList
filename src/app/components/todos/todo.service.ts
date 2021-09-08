import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.interface';

@Injectable()

export class TodoService {

  constructor(
    private _http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>('assets/todos.json');
  }
}
