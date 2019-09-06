<template>
    <div class="thread">
        <p v-for="thread in threads" v-bind:key="thread.id">
            {{ thread.content }}
        </p>

        <input type="text" v-model="newComment">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Thread',
    props: {
        channelName: String,
    },
    data: () => {
        return {
            threads : [],
            newComment: '',
        }
    },
    watch: {
        '$props':{
        handler: function (val, oldVal) { 
            let _this = this
            console.log(this.channelName)
            axios.get('http://localhost:8000/channel/' + _this.channelName + '/thread')
                .then(function(response) {
                    _this.threads = response.data
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
            deep: true
        }
    },
    methods: {

    },
    created () {
        let _this = this
        console.log(this.channelName)
        axios.get('http://localhost:8000/channel/' + _this.channelName + '/thread')
            .then(function(response) {
                _this.threads = response.data
            })
            .catch(function(error) {
                console.log(error)
            })

    }
}
</script>