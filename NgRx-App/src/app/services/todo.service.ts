import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Todo} from "../stores/todo-store/todo.model";

let defaultTodos: Todo[] = [
  {
    title: 'Todo 1',
    summary: 'This is a description for Todo 1',
  },
  {
    title: 'Todo 2',
    summary: 'This is a description for Todo 2',
  },
  {
    title: 'Todo 3',
    summary: 'This is a description for Todo 3',
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /**
   * Get all todos
   */
  getTodos(): Observable<Todo[]> {
    return of(defaultTodos);
  }

  /**
   * Add a new todo
   * @param todo
   */
  addTodo(todo: Todo): Observable<Todo[]> {
    defaultTodos = [...defaultTodos, todo];
    return of(defaultTodos);
  }

  /**
   * Update all todos
   * @param todo
   */
  updateTodos(todos: Todo[]): Observable<Todo[]> {
    defaultTodos = [...todos];
    return of(defaultTodos);
  }
}
