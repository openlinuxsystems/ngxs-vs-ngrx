import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {TodosState} from '../../stores/todos-store/todos.state';
import {AddTodo, GetTodos, SetTodosLoading, UpdateTodos} from '../../stores/todos-store/todos.actions';
import {Todo} from '../../stores/todos-store/todo.model';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {Button} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    Button,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  visible: boolean = false;
  title: string = '';
  summary: string = '';

  constructor(private store: Store) {
    this.todos$ = this.store.select(TodosState.todos);
    this.loading$ = this.store.select(TodosState.loading);
  }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

  showDialog(): void {
    this.title = '';
    this.summary = '';
    this.visible = true;
  }

  addTodo(): void {
    this.store.dispatch(new AddTodo({
      title: this.title,
      summary: this.summary
    }));
    this.visible = false;
  }

  clearTodos(): void {
    this.store.dispatch(new UpdateTodos([]));
  }
}
