<template>
    <div class="signup">
        <h2>SignUp</h2>

        <input type="text" placeholder="Username" v-model="username">
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
        logIn: function() {
            let _this = this
            const data = {
                username : this.username,
                email: this.email,
                password : this.password
            }

            if (this.username != '' && this.password != '' && this.email.email != '') {
                axios.post('/login', data)
                    .then(function(response) {
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