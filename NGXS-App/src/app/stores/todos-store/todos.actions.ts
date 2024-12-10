import {Todo} from './todo.model';

/**
 * Get todos action
 * https://www.ngxs.io/concepts/actions
 */
export class GetTodos {
  static readonly type = '[Todos] Get todos';
}

/**
 * Set todos loading
 * https://www.ngxs.io/concepts/actions
 */
export class SetTodosLoading {
  static readonly type = '[Todos] Set todos loading';
}

/**
 * Add todo action
 * https://www.ngxs.io/concepts/actions
 */
export class AddTodo {
  static readonly type = '[Todos] Add todo';
  constructor(public todo: Todo) { }
}

/**
 * Update todos action
 * https://www.ngxs.io/concepts/actions
 */
export class UpdateTodos {
  static readonly type = '[Todos] Update todos';
  constructor(public todos: Todo[]) { }
}
