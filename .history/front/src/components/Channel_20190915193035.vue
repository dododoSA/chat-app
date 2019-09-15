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
        <a v-if="currentChannelName" href="#" @click="deleteChannel">チャンネルを削除</a>
        <div v-if="currentChannelName">
            <thread-show :channelName="currentChannelName"></thread-show>
        </div>
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
        const headers = {
            Authorization: `Bearer ${this.$store.accessToken}`
        }
        axios.get("/api/channel", headers)
            .then(function(response) {
                _this.channels = response.data
            })
            .catch(function(error){
                if (error.response.status == 401) {
                    _this.$router.push('/login')
                }
                console.log(error)
            })
    },
    methods: {
        newChannel: function () {
            let _this = this
            axios.post("/api/channel")
                .then(function(response) {
                    axios.get("/api/channel")
                        .then(function(response) {
                            _this.channels = response.data
                        })
                        .catch(function(error){
                            console.log(error)
                        })
                })
                .catch(function(error) {
                    if (error.response.status == 401) {
                        _this.$router.push('/login')
                    }
                    console.log(error)
                })
        },
        deleteChannel: function() {
            let _this = this
            axios.delete(`/api/channel/${_this.currentChannelName}`)
                .then(function() {
                    _this.$router.push('/')
                })
                .catch(function(error) {
                    if (error.response.status == 401) {
                        _this.$router.push('/login')
                    }
                    console.log(error)
                })
        }
    },
    components: {
        ThreadShow
    },

    beforeRouteUpdate (to, from, next) {
        this.$store.dispatch('getMe')   
        this.currentChannelName = to.params.name
        next();
    }
}
</script>