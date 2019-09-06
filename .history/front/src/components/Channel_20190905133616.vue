<template>
    <div class="channel">
        <router-link to="/channel/new">+</router-link>
        <ul>
            <li v-for="channel in channels" v-bind:key="channel.id">
                <a @click="changeChannel(channel)">{{ channel.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Channel',
    data: () => {
        return {
            channels: [],
            currentChannelId: '',
        }
    },
    created: function() {
        let _this = this
        axios.get("http://localhost:8000/channel")
            .then(function(response) {
                _this.channels = response.data
            })
            .catch(function(error){
                console.log(error)
            })
    },
    medhods: {
        newChannel: function () {
            let _this = this
            axios.post("http://localhost:8000/channel/new")
                .then(function(response) {
                    axios.get("http://localhost:8000/channel")
                        .then(function(response) {
                            _this.channels = response.data
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        changeChannel: function(channel) {
            this.currentChannelId = channel.id
        }
    }
}
</script>