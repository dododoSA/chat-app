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
                username : this.username,
                password : this.password
            }

            if (this.channelName != '') {
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