<template>
    <div>
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="Enter name..." />
            <br />
            <input type="text" v-model="newUser.email" placeholder="Enter email..." />
            <br />
            <input type="submit" value="Submit" />
        </form>
        <ul>
            <li v-bind:key="user.id" v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted" />
                <span :class="{contacted: user.contacted}">
                    {{ user.name }} : {{ user.email }}<button v-on:click="deleteUser(user)">X</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'users',
    data() {
        return {
            newUser: {},
            users: [
                // {
                //     id: 1,
                //     name: 'Allen Doe',
                //     email: 'allen_doe@gmail.com',
                //     contacted: false
                // },
                // {
                //     id: 2,
                //     name: 'Bob Simth',
                //     email: 'bob_smith@gmail.com',
                //     contacted: true
                // },
                // {
                //     id: 3,
                //     name: 'Eric Wackman',
                //     email: 'eric_wackman@gmail.com',
                //     contacted: false
                // }
            ]
        }
    },
    methods: {
        addUser: function(e) {
            e.preventDefault()
            this.users.push({
                name: this.newUser.name,
                email: this.newUser.email,
                contacted: false
            })
        },
        deleteUser: function(user) {
            this.users.splice(this.users.indexOf(user), 1)
        }
    },
    // Lifecycle Hooks
    created: function() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                // console.log(response)
                this.users = response.data
            })
    }
}
</script>

<style scoped>
.contacted {
    text-decoration: line-through
}
</style>