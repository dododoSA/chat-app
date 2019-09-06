<template>
    <div class="thread">
        <div v-for="thread in threads" :key="thread.id">
            {{ thread.content }}
            <div v-if="!thread.editMode">
                <a href="#" @click="startEdit(thread)">編集</a>
            </div>
            <div v-else>
                <input type="text" v-model="editComment">
                <button @click="editComment">変更</button>
                <button @click="exitEdit(thread)">X</button>
            </div>
        </div>

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
            editComment: ''
        }
    },
    watch: {
        // threads: function(val, oldVal) {
        //     this.editMode = {}
        //     for(let thread in this.threads) {
        //         this.editMode[String(thread.id)] = false;
        //     }
        // }
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
            if(this.newComment != '') {
                const data = {
                    content: this.newComment,
                    channelName: this.channelName
                }
                axios.post("/channel/" + _this.channelName + "/thread/new", data)
                    .then(function(response) {
                        _this.newComment = ''
                        let thread = response.data
                        thread.editMode = false
                        _this.threads.push(thread)
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        },
        editComment: function() {
            let _this = this
            if(this.editComment != '') {
                const data = {
                    content: this.editComment,
                    channelName: this.channelName
                }
                axios.post("/channel/" + _this.channelName + "/thread/edit", data)
                    .then(function(response) {
                        _this.editComment = ''
                        thread.editMode = false
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        },
        exitEdit: function(thread) {
            thread.editMode = false
            this.editComment = ''
        },
        startEdit: function(thread) {
            this.$set(thread, 'editMode' , true)
            for(let t of this.threads){
                if (thread.id != t.id) {
                    this.$set(t, 'editMode' , false)
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
                for(let thread of _this.threads) {
                    _this.$set(thread, 'editMode' , false)
                }
            })
            .catch(function(error) {
                console.log(error)
            })

    },
}
</script>