import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from '@ngxs/store';
import {withNgxsStoragePlugin} from '@ngxs/storage-plugin';
import {withNgxsLoggerPlugin} from '@ngxs/logger-plugin';
import {withNgxsReduxDevtoolsPlugin} from '@ngxs/devtools-plugin';
import {TodosState} from './stores/todos-store/todos.state';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(
      [TodosState],
      withNgxsStoragePlugin({
        keys: [TodosState],
        deserialize: (state) => JSON.parse(atob(state)),
        serialize: (state) => btoa(JSON.stringify(state)),
      })
    ),
    withNgxsLoggerPlugin({
      disabled: false
    }),
    withNgxsReduxDevtoolsPlugin(),
  ]
};
