import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        username: ''
    },
    mutations: {
        setMe(state, payload) {
            state.username = payload.username
        }
    },
    actions: {
        getMe() {
            const payload = {
                username: ''
            }
            axios.get('/get_me')
                .then(function(response) {
                    payload.username = response.data
                    context.commit('setMe', payload)
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    }
})

export default store