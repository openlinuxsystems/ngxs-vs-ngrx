import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { initialTodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(TodoActions.loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),

  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TodoActions.addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos ?? [], todo],
    loading: false,
  })),

  on(TodoActions.addTodoSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),

  on(TodoActions.addTodoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TodoActions.updateTodos, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),

  on(TodoActions.updateTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: [...todos],
    loading: false,
  })),

  on(TodoActions.updateTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
