<template>
    <div class="signup">
        <h2>SignUp</h2>

        <input type="text" placeholder="Username" v-model="username">
        <input type="text" placeholder="E-Mail" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="password" placeholder="PasswordConfirmation" v-model="passwordConfirmation">
        <button @click="signUp">登録</button>
        <p>
            アカウントを持っている方は
            <router-link to="/login">こちら</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Signup',
    data: () => {
        return {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    },
    methods: {
        signUp: function() {
            let _this = this
            const registerData = {
                username : this.username,
                email: this.email,
                password : this.password,
                passwordConfirmation: this.passwordConfirmation
            }

            if (this.username != '' && this.password != '' && this.email != '') {
                const authData = {
                    grant_type : 'password',
                    username : this.username,
                    password : this.password,
                    //この辺生なのはよくないから後で修正しよう
                    client_id : '2_68pou4wtl544w44888kgoogkgwckks0o4444gswcksko8oo8g8',
                    client_secret : '155f72f1hqbks0kowg4c8g40sc8c80wg48k8w0oks8sso800ww'
                }
                axios.post('/register', data)
                    .then(function(response) {
                        axios.post('/oauth/v2/token', authData)
                            .then(function(response) {
                                _this.$store.dispatch('setToken', response.data.access_token)
                                _this.$router.push({name: 'Top'})
                            })
                            .catch(function(error) {
                                console.log(error)
                            })
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        }
    }
}
</script>