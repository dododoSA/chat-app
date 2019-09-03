<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="{{ path('channel_index') }}">Index</a>
            <ul class="navbar-nav mr-auto">
                {% if app.user %}
                    <li class="nav-item">
                        <a class="nav-link" href="{{path('logout')}}">ログアウト</a>
                    </li>
                {% else %}
                    <li class="nav-item">
                        <a class="nav-link" href="{{ path('login')}}">ログイン</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ path('user_registration')}}">ユーザー登録</a>
                    </li>
                {% endif %}
            </ul>
        </nav>
        
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
