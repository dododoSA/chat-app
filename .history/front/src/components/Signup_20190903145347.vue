<template>
    <div class="signup">
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <input type="password" placeholder="passwordConfirmation" v-model="passwordConfirmation"> 
    </div>
</template>

<script>
export default {
    name: 'Signup'
}
</script>