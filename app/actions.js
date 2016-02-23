

export function deleteTodoAction(todo) {
	return {
		type: "DELETE_TODO",
		todo: todo
	}
}

export function addTodoAction(todo) {
	return {
		type: "ADD_TODO",
		todo: todo
	}
}

export function setNewTodoAction(todo) {
	return {
		type: "SET_NEW_TODO",
		todo: todo
	}
}
