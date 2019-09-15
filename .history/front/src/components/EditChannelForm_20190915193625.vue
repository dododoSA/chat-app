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
                afterName: this.channelName,
                beforeName: this.$route.params['name']
            }

            if (this.channelName != '') {
                axios.put('/api/channel', data)
                    .then(function(response) {
                        _this.$router.push({name: 'Channel', params: { name: response.data.name }})
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