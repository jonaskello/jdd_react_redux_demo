import React from 'react';
import ReactDOM from 'react-dom';
import {TodoMain} from './todo_main';
import {store} from './store';
import {Provider} from 'react-redux'

const mountNode = document.getElementById('app');
	ReactDOM.render(<Provider store={store}>
		<TodoMain /></Provider>, mountNode);
