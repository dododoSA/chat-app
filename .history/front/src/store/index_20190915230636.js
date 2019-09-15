import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        accessToken: ''
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = 'Bearer ' + token
        }
    },
    actions: {
        setToken(context, token) {
            context.commit('setAccessToken', token)
        },
        deleteToken(context) {
            context.commit('setAccessToken', '')
        }
    }
})

export default store