<template>
  <div id="app">
      <h1>todo application</h1>
    <hr>
    <TodoList
      v-bind:todos="todos"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
export default {
  name: 'App',
  data() {
      return {
        todos:[
          {id:1,title: 'Кпить хлеб', completed: false},
          {id:2,title: 'Кпить масло', completed: false},
          {id:3,title: 'Кпить пиво', completed: false},
        ]
      }
  },
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
