import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        accessToken: ''
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = token
        }
    },
    actions: {
        setToken(context, token) {
            context.commit('setAccessToken', token)
        }
    }
})

export default store