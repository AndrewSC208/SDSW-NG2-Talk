import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

	todos: Todo[];
  counter: number;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {

    this.homeService.getTodos().then((todos) => {
      this.todos = todos;
      this.counter = todos.length;
    });

  }

  completeTodo(todo) {
    this.counter--;
    this.homeService.completeTodo(todo);
  };

  addTodo(todo) {
    this.counter++;
    this.homeService.createTodo(this.counter, todo);
  };

}
