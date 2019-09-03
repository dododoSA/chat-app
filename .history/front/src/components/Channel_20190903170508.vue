<template>
    <div class="channel">
        <ul>
            <li v-for="channel in channels" v-bind:key="channel.id">
                {{ channel.name }}
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
            channels: []
        }
    },
    created: function() {
        let _this = this
        axios.get("/channels")
            .then(function(response) {
                _this.channels = response.data
            })
            .catch(function(error){
                console.log(error)
            })
    },
}
</script>