<template>
    <div class="thread">
        <p v-for="thread in threads" v-bind:key="thread.id">
            {{ thread.content }}
            <div v-if="!editMode[thread.id]">
                <a href="#" @click="startEdit(thread)">編集</a>
            </div>
            <div v-else>
                <input type="text" v-model="editComment">
                <button @click="editComment">変更</button>
                <button @click="exitEdit(thread)">X</button>
            </div>
        </p>

        <input type="text" v-model="newComment">
        <button @click="postComment">送信</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Thread',
    props: {
        channelName: String,
    },
    data: () => {
        return {
            threads : [],
            newComment: '',
            editMode: {},
            editComment: ''
        }
    },
    watch: {
        threads: function(val, oldVal) {
            this.editMode = {}
            for(let thread in this.threads) {
                this.editMode[thread.id] = false;
            }
        }
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
    },
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
        exitEdit: function(thread) {
            this.editMode[thread.id] = false
            this.editComment = ''
        },
        startEdit: function(thread) {
            this.editMode[thread.id] = true
            for(let key in this.editMode){
                if (thread.id != key) {
                    editMode[thread.id] = false
                }
            }
            this.editComment = thread.content
        }
    },
    created () {
        let _this = this
        console.log(this.channelName)
        axios.get('/channel/' + _this.channelName + '/thread')
            .then(function(response) {
                _this.threads = response.data
                _this.editMode = {}
                for(let thread in _this.threads) {
                    _this.editMode[thread.id] = false;
                }
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error)
            })

    },
}
</script>