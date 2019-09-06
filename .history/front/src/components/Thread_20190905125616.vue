<template>
    <div class="thread">
        <p>
            
        </p>
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
        axios.get('http://channel/' + channelName + '/threads')
            .then(function(response) {
                _this.threads = response.data
            })
            .catch(function(error) {
                console.log(error)
            })

    }
}
</script>