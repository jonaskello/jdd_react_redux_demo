import React from 'react';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';
import {store} from './store';
import * as actions from './actions';
import {connect} from 'react-redux';
import {ActionCreators as UndoActions } from 'redux-undo';

export function _TodoMain({state, dispatch}) {
	return <div>
		<TodoList todos={state.todos}
							deleteTodo={(todo) =>
							dispatch(actions.deleteTodoAction(todo))}/>
		<TodoForm
			newTodo={state.newTodo}
			setNewTodo={(todo) =>
			dispatch(actions.setNewTodoAction(todo))}
			addTodo={(todo) => dispatch(actions.addTodoAction(todo))}/>
		<button onClick={(e)=>dispatch(UndoActions.undo())}>undo</button>
		<button onClick={(e)=>dispatch(UndoActions.redo())}>redo</button>
	</div>
}

export const TodoMain =
	connect((state)=>({state:state}))(_TodoMain);