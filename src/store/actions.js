import * as types from './mutations_type.js'


export const addTodo = ({ commit }, todo) => {
  commit(types.addTodo, todo)
}
export const toggleTodo = ({ commit }, todo) => {
  commit(types.toggleTodo, todo)
}
export const deleteTodo = ({ commit }, todo) => {
  commit(types.deleteTodo, todo)
}
export const editTodo = ({commit}, [todo, newContent]) => {
	commit(types.editTodo, [todo, newContent])
}