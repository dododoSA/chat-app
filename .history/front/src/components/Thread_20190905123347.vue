<template>
    <div class="thread">

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
        }
    },
    created () {
        let _this = this
        axios.get('http://channel/' + channelName)
            .then(function(response) {
                _this.threads = response.data
            })
            .catch(function(error) {
                console.log(error)
            })

    }
}
</script>