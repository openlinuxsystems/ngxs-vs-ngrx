import { Todo } from './todo.model';

export interface TodoState {
  todos: Todo[] | null;
  loading: boolean;
  error: any;
}

export const initialTodoState: TodoState = {
  todos: null,
  loading: false,
  error: null,
};
