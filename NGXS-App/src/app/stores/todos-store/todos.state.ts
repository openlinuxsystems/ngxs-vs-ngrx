import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Todo} from './todo.model';
import {AddTodo, GetTodos, SetTodosLoading, UpdateTodos} from './todos.actions';
import {TodoService} from '../../services/todos.service';
import {Observable, tap} from 'rxjs';

export interface TodosStateModel {
  todos: Todo[];
  loading: boolean;
  error: any;
}

const defaults = {
  todos: [],
  loading: false,
  error: null
};

@State<TodosStateModel>({
  name: 'todos',
  defaults
})
@Injectable()
export class TodosState {
  /**
   * Get all todos
   * https://www.ngxs.io/concepts/select/selector-utils
   * @param state
   */
  @Selector()
  public static todos(state: TodosStateModel): Todo[] {
    return state.todos;
  }

  /**
   * Get loading state
   * https://www.ngxs.io/concepts/select/selector-utils
   * @param state
   */
  @Selector()
  public static loading(state: TodosStateModel): boolean {
    return state.loading;
  }

  /**
   * Get error state
   * https://www.ngxs.io/concepts/select/selector-utils
   * @param state
   */
  @Selector()
  public static error(state: TodosStateModel): any {
    return state.error;
  }

  constructor(private todoService: TodoService) {}

  /**
   * Get all todos
   * @param getState
   * @param setState
   * https://www.ngxs.io/concepts/state
   */
  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<TodosStateModel>): Observable<Todo[]> {
    const state = getState();

    return this.todoService.getTodos().pipe(
      tap((todos) => {
        setState({
          ...state,
          todos,
          loading: false,
          error: null
        });
      })
    );
  }

  /**
   * Set todos loading
   * This is for demo purposes only
   * @param patchState
   * https://www.ngxs.io/concepts/state
   */
  @Action([SetTodosLoading, AddTodo])
  isLoading({ patchState }: StateContext<TodosStateModel>): void {
    patchState({
      loading: true,
    });
  }

  /**
   * Add a new todo
   * @param getState
   * @param setState
   * @param todo
   * https://www.ngxs.io/concepts/state
   */
  @Action(AddTodo)
  addTodo({ getState, setState }: StateContext<TodosStateModel>, { todo }: AddTodo): Observable<Todo[]> {
    const state = getState();

    return this.todoService.addTodo(todo).pipe(
      tap((todos) => {
        setState({
          ...state,
          todos,
          loading: false,
          error: null
        });
      })
    );
  }

  /**
   * Update all todos
   * @param setState
   * @param todos
   * https://www.ngxs.io/concepts/state
   */
  @Action(UpdateTodos)
  updateTodo({ setState }: StateContext<TodosStateModel>, { todos }: UpdateTodos): Observable<Todo[]> {
    return this.todoService.updateTodos(todos).pipe(
      tap((data) => {
        setState({
          todos: data,
          loading: false,
          error: null
        });
      })
    );
  }
}
