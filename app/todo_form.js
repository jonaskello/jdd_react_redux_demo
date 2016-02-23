import React from 'react';

export function TodoForm({newTodo, setNewTodo, addTodo}) {
	return <div>
		<input
			type="text"
			value={newTodo}
			onChange={(e) => setNewTodo(e.target.value)}/>
		<button onClick={(e) => addTodo(newTodo)}>Add</button>
	</div>
}
