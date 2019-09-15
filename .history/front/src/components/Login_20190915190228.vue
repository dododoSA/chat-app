<template>
    <div class="login">
        <h2>Log in</h2>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button class="btn btn-primary" @click="logIn">ログイン</button>
        <p>
            アカウントを持ってない方は
            <router-link to="/signup">こちら</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data: () => {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        logIn: function() {
            let _this = this
            const data = {
                grant_type : 'password',
                username : this.username,
                password : this.password,
                //この辺生なのはよくないから後で修正しよう
                client_id : '2_68pou4wtl544w44888kgoogkgwckks0o4444gswcksko8oo8g8',
                client_secret : '155f72f1hqbks0kowg4c8g40sc8c80wg48k8w0oks8sso800ww'
            }

            if (this.username != '' && this.password != '') {
                axios.post('/oauth/v2/token', data)
                    .then(function(response) {
                        _this.$store.dispatch('setToken', response.data.access_token)
                        _this.$router.push({name: 'Top'})
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        }
    }
}
</script>