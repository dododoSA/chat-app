<template>
    <div class="thread">
        <p v-for="thread in threads" v-bind:key="thread.id">
            {{ thread.content }}
            <a href="#" @click="startEdit(thread)">編集</a>
        </p>

        <div v-if="!editMode">
            <input type="text" v-model="newComment">
            <button @click="postComment">送信</button>
        </div>
        <div v-else>
            <div  v-clickut-oside="exitEdit">
                <input type="text" v-model="editComment">
                <button @click="editComment">変更</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import vClickOutside from 'vue-click-outside'

export default {
    name: 'Thread',
    props: {
        channelName: String,
    },
    data: () => {
        return {
            threads : [],
            newComment: '',
            editMode: false,
            editComment: ''
        }
    },
    // watch: {
    //     '$props':{
    //     handler: function (val, oldVal) { 
    //         let _this = this
    //         axios.get('/channel/' + _this.channelName + '/thread')
    //             .then(function(response) {
    //                 _this.threads = response.data
    //             })
    //             .catch(function(error) {
    //                 console.log(error)
    //             })
    //     },
    //         deep: true
    //     }
    // },
    methods: {
        postComment: function() {
            let _this = this
            if(this.newComment != '' && this.editMode == false) {
                const data = {
                    content: this.newComment,
                    channelName: this.channelName
                }
                axios.post("/channel/" + _this.channelName + "/thread/new", data)
                    .then(function(response) {
                        _this.newComment = ''
                        _this.threads.push(response.data)
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        },
        editComment: function() {

        },
        exitEdit: function() {
            this.editMode = false
            this.editComment = ''
        },
        startEdit: function(thread) {
            this.editMode = true
            this.editComment = thread.content
        }
    },
    created () {
        let _this = this
        console.log(this.channelName)
        axios.get('http://localhost:8000/channel/' + _this.channelName + '/thread')
            .then(function(response) {
                _this.threads = response.data
            })
            .catch(function(error) {
                console.log(error)
            })

    },
    mounted() {
        this.popupItem = this.$el
    },
    directives: {
        clickOutside: vClickOutside.directives
    }
}
</script>