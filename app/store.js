import {render} from './main';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import undoable, {includeAction} from 'redux-undo';

const rootReducer = combineReducers({
	todos: undoable(todosReducer, {filter: includeAction("ADD_TODO")}),
	newTodo: newTodoReducer
});

function todosReducer(state = ['Learn ES6', 'Learn React', 'Learn Redux'], action) {

	switch (action.type) {
		case "ADD_TODO":
			return  state.concat([action.todo]);
			break;
		case "DELETE_TODO":
			return state.filter((t) => t !== action.todo);
			break;
		default:
			return state;
	}

}

function newTodoReducer(state = 'new todo', action) {

	switch (action.type) {
		case "SET_NEW_TODO":
			return  action.todo;
			break;
		default:
			return state;
	}

}

export const store = createStore(rootReducer, undefined,
	window.devToolsExtension ? window.devToolsExtension() : undefined);

