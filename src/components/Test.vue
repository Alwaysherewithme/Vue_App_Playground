<template>
    <div>
        <h1>{{ title }}</h1>
        <div>
            <span v-text="author"></span>
            <i v-if="showName">{{ user.firstName + ' ' + user.lastName }}</i>
            <i v-else>ANONYMOUS...</i>
            <span>&nbsp;</span>
            <span v-html="email"></span>
            <span>&nbsp;</span>
            <span>{{ address }}</span>
            <div>
                <label>Nationality:</label><input type="text" v-model="user.nationality" /><br />
                <label>City:</label><input type="text" v-model="user.city" /><br />
            </div>
            <ul>
                <li v-bind:key="hobby.id" v-for="hobby in hobbies">{{ hobby.label }}</li>
            </ul>
            <div>
                <label>Job:</label><span>{{ job }}</span>
                <input type="text" v-model="title" placeholder="Please input title..."/>
            </div>
            <div>
                <!-- <input type="text" v-on:keyup.exact="pressKey" v-on:keyup.enter="enterHit" /> -->
                <button v-on:click="greet('Hello World!')">Greet</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        job: {
            type: String,
            default: 'Developer'
        }
    },
    data() {
        return {
            title: 'Test.vue',
            author: 'Author: ',
            user: {
                firstName: 'Alwayshere',
                lastName: 'ZHOU',
                nationality: 'CN',
                city: 'Shanghai'
            },
            email: '<a href="zhouwenming0401@qq.com">zhouwenming0401@qq.com</a>',
            showName: true,
            hobbies: [
                {id: 1, label: 'Code'},
                {id: 2, label: 'Photography'},
                {id: 3, label: 'Music'}
            ]
        }
    },
    methods: {
        greet: function(para) {
            alert(para)
        },
        // pressKey: function(e) {
        //     console.log(e.target.value)
        // },
        // enterHit: function() {
        //     console.log('You hit enter key!')
        // }
    },
    computed: {
        address: function() {
            return this.user.city + ', ' + this.user.nationality
        }
    }
}
</script>

<style scoped>

</style>