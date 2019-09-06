<template>
    <div class="thread">

    </div>
</template>

<script>
export default {
    name: 'Thread',
    props: {
        channelId: Number,
    },
    data: () => {
        return {
            threads : [],
        }
    }
}
</script>