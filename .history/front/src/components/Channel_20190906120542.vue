<template>
    <div class="channel">
        <router-link to="/channel/new">+</router-link>
        <ul>
            <li v-for="channel in channels" v-bind:key="channel.id">
                <router-link :to="{ name : 'Channel', params : { name: channel.name }}">{{ channel.name }}</router-link>
            </li>
        </ul>
        <h2>{{ currentChannelName }}</h2>
        <router-link v-if="currentChannelName" :to="{ name: 'EditChannelForm', params : { name: currentChannelName} }"> チャンネル名を変更 </router-link>
        <a href="#" @click="deleteChannel">チャンネルを削除</a>
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
        this.currentChannelName = this.$route.params.name
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
        deleteChannel: function() {
            let _this = this
            const data = {
                name: currentChannelName
            }
            axios.post("/channel/delete", data)
                .then(function() {
                    _this.$router.push('/')
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    },
    components: {
        ThreadShow
    },

    beforeRouteUpdate (to, from, next) {
        this.currentChannelName = to.params.name
        next();
    }
}
</script>