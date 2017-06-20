import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';
import { TODOS } from '../shared/mock-data';

let todoPromise = Promise.resolve(TODOS);

@Injectable()
export class HomeService {

	getTodos(): Promise<Todo[]>{
		return Promise.resolve(TODOS);
	}

	createTodo(id: number, todoText: string): void {
		TODOS.push({ 'id': id, 'text': todoText});
	}

	completeTodo(todo) {
    	TODOS.splice((TODOS.findIndex(x => x.text == todo.text)), 1);
	}
	
}