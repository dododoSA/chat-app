<template>
    <div class="new-channel-form">
        <h2>新しいチャンネルを作成</h2>
        <input type="text" placeholder="NewChannelName" v-model="channelName">
        <button @click="postChannel">作成</button>
    </div>
</template>

<script>
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
            if (this.channelName != '') {
                let params = new URLSearchParams()
                params.append('name', _this.channelName)

                axios.post('http://localhost:8000/channel/new')
                    .then(function(response) {

                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        }
    },
}
</script>