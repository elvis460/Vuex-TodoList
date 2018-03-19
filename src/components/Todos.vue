<template>
  <div>
  	<h2> Add Todo</h2>
    <input type="text" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo" />
		<button @click="actionAddTodo">add todo</button>

  	<h2>Todo List</h2>
    <ul>
    	<li v-for="todo in todos">
    	 	<input type="checkbox" :checked="todo.done" @change="todoToggle(todo)"/>
    	  {{todo.content}}
    		<button @click="showEditInput=todo.key;newContent=todo.content">Edit</button>
        <button @click="deleteItem(todo)">Delete</button><br>
        <input type="text" v-model="newContent" v-if="showEditInput==todo.key" @keyup.enter="editContent(todo)"@blur="cancelEdit" @keyup.esc="cancelEdit">
    	</li>
    </ul>

    <h2>Done List</h2>
    <ul>
    	<li v-for="done in dones">
    	  <input type="checkbox" :checked="done.done" @change="todoToggle(done)"/>
    		{{done.content}}
    		<button @click="showEditInput=done.key;newContent=done.content">Edit</button>
        <button @click="deleteItem(done)">Delete</button><br>
        <input type="text" v-model="newContent" v-if="showEditInput==done.key" @keyup.enter="editContent(done)" @blur="cancelEdit" @keyup.esc="cancelEdit">


    	</li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  data () {
    return {
    	newTodo: '',
    	newContent: '',
    	showEditInput: -1
    }
  },
  computed:{
  	...mapGetters({
  		todos: 'getTodos',
  		dones: 'getDones'
  	})
  },
  methods:{
  	...mapActions([
  		'addTodo',
  		'toggleTodo',
  		'deleteTodo',
  		'editTodo'
  	]),
	  actionAddTodo(){
	  	this.addTodo(this.newTodo)
	  	this.newTodo=''
	  },
	  todoToggle(todo){
	  	this.toggleTodo(todo)
	  },
	  deleteItem(todo){
	  	this.deleteTodo(todo)
	  },
	  editContent(todo){
	  	this.editTodo([todo, this.newContent])
	  	this.showEditInput = -1
	  	this.newContent = ""
	  },
	  cancelEdit(){
			this.showEditInput= -1
	  }

  },
}
</script>