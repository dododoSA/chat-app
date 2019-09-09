<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/">Index</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a v-if="me" href="#" class="nav-link" @click="logout">ログアウト</a>
        </li>
        <li v-if="!me" class="nav-item">
          <router-link to="/login">ログイン</router-link>
        </li>
        <li v-if="!me" class="nav-item">
          <router-link to="/signup">ユーザー登録</router-link>
        </li>
      </ul>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      let _this = this
      axios.get("/logout")
      .then(function(res){
        _this.$store.dispatch('getMe')
        _this.$router.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  },
  computed: {
    me() {
      return this.$store.getters.username === '' ? false : true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
