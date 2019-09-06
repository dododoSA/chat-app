<template>
    <div class="edit-channel-form">
        <h2>チャンネルの名前変更</h2>
        <input type="text" placeholder="EditChannelName" v-model="newChannelName">
        <button @click="postChannel">変更</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditChannelForm',
    data: () =>  {
        return {
            newChannelName: ''
        }
    },
    methods: {
        postChannel: function() {
            let _this = this
            const data = {
                afterName: this.newChannelName,
                beforeName: this.$router.params['name']
                }

            if (this.newChannelName != '') {
                axios.post('http://localhost:8000/channel/edit', data)
                    .then(function(response) {
                        _this.$router.push({name: 'Channel', params: { name: response.data.name }})
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        }
    },

}
</script>