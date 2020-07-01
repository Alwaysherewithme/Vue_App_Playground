<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <test job="Animator"></test>
    <user></user>
    <hr />
    <Todos v-bind:myTodos="todos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import User from './components/User.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Test,
    User,
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'AA aa',
          completed: true
        },
        {
          id: 2,
          title: 'BB bb',
          completed: false
        },
        {
          id: 3,
          title: 'CC cc',
          completed: true
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
