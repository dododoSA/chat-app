<template>
    <div class="thread">
        <div v-for="thread in threads" :key="thread.id">
            {{ thread.content }}
            <div v-if="!thread.editMode">
                <a href="#" @click="startEdit(thread)">編集</a>
            </div>
            <div v-else>
                <input type="text" v-model="editComment">
                <button @click="postEditComment(thread)">変更</button>
                <button @click="exitEdit(thread)">X</button>
            </div>
            <a href="#" @click="deleteThread(thread)">削除</a>
        </div>
        <div v-if="canPost">
            <input type="text" v-model="newComment">
            <button @click="postComment">送信</button>
        </div>
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
        '$props':{
        handler: function (val, oldVal) { 
            let _this = this
            const header = {
                Authorization: this.$store.state.accessToken
            }
            axios.get('/api/channel/' + _this.channelName + '/thread', header)
                .then(function(response) {
                    _this.threads = response.data
                })
                .catch(function(error) {
                    if (error.response.status == 401) {
                        _this.$router.push('/login')
                    }
                    console.log(error)
                })
        },
            deep: true
        }
    },
    computed: {
        canPost() {
            return (this.$store.state.username === '' ? false : true) && this.channelName
        }
    },
    methods: {
        postComment: function() {
            let _this = this
            if(this.newComment != '') {
                const data = {
                    content: this.newComment,
                    channelName: this.channelName
                }
                const header = {
                    Authorization: this.$store.state.accessToken
                }
                axios.post("/api/channel/" + _this.channelName + "/thread", header, data)
                    .then(function(response) {
                        _this.newComment = ''
                        let thread = response.data
                        thread.editMode = false
                        axios.get(`/api/channel/${_this.channelName}/thread`, header)
                            .then(function(response) {
                                _this.threads.push(thread)
                            })
                            .catch(function(error) {
                                console.log(error)
                            })
                    })
                    .catch(function(error) {
                        if (error.response.status === 401) {
                            _this.$router.push('/')
                        }
                        console.log(error)
                    })
            }
        },
        postEditComment: function(thread) {
            let _this = this
            if(this.editComment != '') {
                const data = {
                    content: this.editComment,
                    threadId: thread.id
                }
                const header = {
                    Authorization: this.$store.state.accessToken
                }
                axios.put("/channel/" + _this.channelName + "/thread", header, data)
                    .then(function(response) {
                        thread.content = _this.editComment
                        _this.editComment = ''
                        thread.editMode = false
                    })
                    .catch(function(error) {
                        if (error.response.status) {
                            _this.$router.push("/login")
                        }
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
        },
        deleteThread: function(thread) {
            let _this = this
            const data = {
                id: thread.id
            }
            const header = {
                Authorization: this.$store.state.accessToken
            }
            axios.delete("/api/channel/" + _this.channelName + "/thread/delete", header, data)
                .then(function() {
                    axios.get('/channel/' + _this.channelName + '/thread')
                        .then(function(response) {
                            _this.threads = response.data
                        })
                        .catch(function(error) {
                            console.log(error)
                        })
                })
                .catch(function(error) {
                    console.log(error)
                })
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