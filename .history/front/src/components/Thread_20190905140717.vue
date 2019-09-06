<template>
    <div class="thread">
        <p v-for="thread in threads" v-bind:key="thread.id">
            {{ thread.content }}
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Thread',
    props: {
        channelName: String
    }
    ,
    data: () => {
        return {
            threads : [],
        }
    },
    created () {
        let _this = this
        console.log(this.channelName)
        axios.get('http://channel/' + _this.channelName + '/threads')
            .then(function(response) {
                _this.threads = response.data
            })
            .catch(function(error) {
                console.log(error)
            })

    }
}
</script>