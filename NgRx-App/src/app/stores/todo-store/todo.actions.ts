import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ todos: Todo[] }>()
);

export const addTodoFailure = createAction(
  '[Todo] Add Todo Failure',
  props<{ error: any }>()
);

export const updateTodos = createAction(
  '[Todo] Update Todos',
  props<{ todos: Todo[] }>()
);

export const updateTodosSuccess = createAction(
  '[Todo] Update Todos Success',
  props<{ todos: Todo[] }>()
);

export const updateTodosFailure = createAction(
  '[Todo] Update Todos Failure',
  props<{ error: any }>()
);
