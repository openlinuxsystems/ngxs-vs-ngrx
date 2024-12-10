import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as TodoActions from './todo.actions';
import { TodoService } from '../../services/todo.service';
import {Todo} from "./todo.model";

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        )
      )
    )
  );

  addTodos$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(TodoActions.addTodo),
        switchMap(action =>
          this.todoService.addTodo(action.todo).pipe(
            map((todos) => TodoActions.addTodoSuccess({todos})),
            catchError((error) => of(TodoActions.addTodoFailure({error})))
          )
        )
      );
    }
  );

  updateTodos$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(TodoActions.updateTodos),
        switchMap(action =>
          this.todoService.updateTodos(action.todos).pipe(
            map((todos) => TodoActions.updateTodosSuccess({todos})),
            catchError((error) => of(TodoActions.updateTodosFailure({error})))
          )
        )
      );
    }
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
