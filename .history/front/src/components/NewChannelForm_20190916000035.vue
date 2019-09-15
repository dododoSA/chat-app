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
            if (this.channelName !== '') {
                axios.post('/api/channel', data, {
                        headers: {
                            Authorization: this.$store.state.accessToken
                        }
                    })
                    .then(function(response) {
                        _this.$router.push({name: 'Channel', params: { name: data.name }})
                    })
                    .catch(function(error) {
                        if (error.response.status === 401) {
                            _this.$router.push('/login')
                        }
                        console.log(error)
                    })
            }
        }
    },

}
</script>