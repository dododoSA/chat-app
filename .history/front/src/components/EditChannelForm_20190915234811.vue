<template>
    <div class="edit-channel-form">
        <h2>チャンネルの名前変更</h2>
        <input type="text" placeholder="EditChannelName" v-model="channelName">
        <button @click="postChannel">変更</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditChannelForm',
    data: () =>  {
        return {
            channelName: ''
        }
    },
    methods: {
        postChannel: function() {
            let _this = this
            const data = {
                afterName: this.channelName
            }
            if (this.channelName != '') {
                axios.put(`/api/channel/${this.$route.params['name']}`, data, {
                    headers: {
                        Authorization: this.$store.state.accessToken
                    }
                })
                    .then(function(response) {
                        _this.$router.push({name: 'Channel', params: { name: data.afterName }})
                    })
                    .catch(function(error) {
                        if (error.response.status == 401) {
                            _this.$router.push('/login')
                        }
                        console.log(error)
                    })
            }
        }
    },

}
</script>