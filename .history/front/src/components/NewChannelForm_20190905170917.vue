<template>
    <div class="new-channel-form">
        <h2>新しいチャンネルを作成</h2>
        <input type="text" placeholder="NewChannelName" v-model="channelName">
        <button @click="postChannel">作成</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'NewChannelForm',
    data: () =>  {
        return {
            channelName: ''
        }
    },
    methods: {
        postChannel: function() {
            let _this = this
            const data = {name: this.channelName}
            if (this.channelName != '') {
                axios.post('http://localhost:8000/channel/new', data)
                    .then(function(response) {
                        _this.router.push("/")
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        }
    },
}
</script>