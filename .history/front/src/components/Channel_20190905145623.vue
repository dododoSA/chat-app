<template>
    <div class="channel">
        <router-link to="/channel/new">+</router-link>
        <ul>
            <li v-for="channel in channels" v-bind:key="channel.id">
                <button @click="changeChannel(channel)">{{ channel.name }}</button>
            </li>
        </ul>
        <thread-show :channelName="currentChannelName"></thread-show>
    </div>
</template>

<script>
import axios from 'axios'
import ThreadShow from './Thread'

export default {
    name: 'Channel',
    data: () => {
        return {
            channels: [],
            currentChannelName: '',
        }
    },
    created: function() {
        let _this = this
        axios.get("http://localhost:8000/channel")
            .then(function(response) {
                _this.channels = response.data
                _this.currentChannelName = response.data[0].name
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
            this.currentChannelName = channel.name
        }
    },
    components: {
        ThreadShow
    }
}
</script>