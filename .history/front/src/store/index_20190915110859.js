import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        accessToken: ''
    },
    mutations: {
        setAccessToken(state, payload) {
            state.accessToken = payload.accessToken
        }
    },
    actions: {
        setToken(context, token) {
            let payload = {
                accessToken: token
            }
            context.commit('setAccessToken', payload)
        }
    }
})

export default store