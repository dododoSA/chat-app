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
    created() {
        
    },
}
</script>