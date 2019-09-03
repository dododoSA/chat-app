<template>
    <div class="signup">
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
            password: '',
            passwordConfirmation: ''
        }
    }
}
</script>