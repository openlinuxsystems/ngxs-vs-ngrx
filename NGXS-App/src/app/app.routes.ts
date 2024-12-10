import { Routes } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];
