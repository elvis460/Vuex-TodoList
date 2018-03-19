export const getTodos = state => { return state.todos.filter((item)=> !item.done)}
export const getDones = state => { return state.todos.filter((item)=> item.done)} 