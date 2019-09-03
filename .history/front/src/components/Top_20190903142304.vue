<template>
    <div class="Top">
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
    </div>
</template>