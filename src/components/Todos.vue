<template>
    <div>
        <h1>Todos</h1>
        <div v-bind:key="myTodo.id" v-for="myTodo in myTodos">
            <!-- <i>{{ myTodo.title }}</i> -->
            <TodoItem v-bind:myTodoItem="myTodo"/>
        </div>

    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: 'Todos',
    props: ['myTodos'],
    components: {
        TodoItem
    }
}
</script>

<style scoped>

</style>
