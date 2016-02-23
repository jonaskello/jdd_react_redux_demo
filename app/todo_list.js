import React from 'react';

export function TodoList({todos, deleteTodo}) {
	return <div>
		{todos.present.map((t) =>
			<div key={t}>{t}
				<button onClick={(e) => deleteTodo(t) }>Delete</button>
			</div>)}
	</div>
}
