<template>
    <div class="todo-item" v-bind:class="{'is-complete':myTodoItem.completed}">
        <input type="checkbox" v-on:change="markComplete"/>
        <i>{{ myTodoItem.title }}</i>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: ['myTodoItem'],
        methods: {
            markComplete() {
                // console.log(123)
                // 33:33
            }
        }
    }
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted
}

.is-complete {
    text-decoration: line-through;
}
</style>