<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/">Index</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <!--a-- class="nav-link" href="{{path('logout')}}">ログアウト</!--a-->
        </li>
        <li class="nav-item">
          <router-link to="/login">ログイン</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup">ユーザー登録</router-link>
        </li>
      </ul>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
