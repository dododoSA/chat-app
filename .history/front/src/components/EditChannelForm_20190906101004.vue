<template>
    <div class="edit-channel-form">
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