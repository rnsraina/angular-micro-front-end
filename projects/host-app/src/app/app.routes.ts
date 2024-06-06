import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = 'http://localhost:4300/remoteEntry.js';
export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'todo-list',
    loadComponent: () => loadRemoteModule(
      {
        remoteName: "mfeApp",
        remoteEntry: MFE_APP_URL,
        exposedModule: './TodoListComponent'
      }
    ).then(m => m.TodoListComponent).catch(e => console.log(e))
    // loadComponent: () => import('../../../mfe-app/src/app/todo-list/todo-list.component').then(m => m.TodoListComponent)
  },
];
