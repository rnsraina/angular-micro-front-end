import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe-app';
}
