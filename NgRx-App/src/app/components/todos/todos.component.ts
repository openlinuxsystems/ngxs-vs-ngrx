import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as TodosSelectors from '../../stores/todo-store/todo.selectors';
import * as TodosActions from '../../stores/todo-store/todo.actions';
import {Observable} from "rxjs";
import {Todo} from "../../stores/todo-store/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[] | null> = this.store.select(TodosSelectors.selectTodos);
  loading$: Observable<boolean> = this.store.select(TodosSelectors.selectTodosLoading);
  visible: boolean = false;
  title: string = '';
  summary: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosActions.loadTodos());
  }

  showDialog(): void {
    this.title = '';
    this.summary = '';
    this.visible = true;
  }

  addTodo(): void {
    this.store.dispatch(TodosActions.addTodo({
      todo: {
        title: this.title,
        summary: this.summary
      },
    }));
    this.visible = false;
  }

  clearTodos(): void {
    this.store.dispatch(TodosActions.updateTodos({
      todos: []
    }));
  }
}
