<template>
    <div class="channel">
        <ul v-for="channel in channels" v-bind::key="channel.id">

        </ul>
    </div>
</template>

<script>
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