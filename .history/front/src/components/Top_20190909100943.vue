<template>
    <div class="Top">
        <channel></channel>
    </div>
</template>

<script>
import Channel from './Channel.vue'

export default {
    name: 'Top',
    components: {
        Channel
    },
    created() {
        this.$store.dispatch('getMe')   
    }
}
</script>