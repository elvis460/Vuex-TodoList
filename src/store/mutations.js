import * as types from './mutations_type.js'

export const state = {
	todos: [
		{ key: 0, content: 'vue.js 2.0', done: true },
		{ key: 1, content: 'vuex 2.0', done: false },
		{ key: 2, content: 'vue-router 2.0', done: false },
		{ key: 3, content: 'vue-resource 2.0', done: false },
		{ key: 4, content: 'webpack', done: false }
	]
}

export const mutations = {
	[types.addTodo] (state, todo){
		state.todos.push({ key: state.todos.length, content: todo, done: false })
	},
	[types.toggleTodo] (state, todo){
		var index = state.todos.indexOf(todo)
		state.todos[index].done = !state.todos[index].done
	},
	[types.deleteTodo] (state, todo){
		var index = state.todos.indexOf(todo)
		state.todos.splice(index, 1)
	},
	[types.editTodo] (state, [todo, newContent]){
		var index = state.todos.indexOf(todo)
		state.todos[index].content = newContent
	}
}