<template>
    <div id="app">
        <div class="menu">
            <ul>
                <li class="menu-items">Versão 1</li>
                <li class="menu-items">Versão 2</li>
            </ul>
        </div>
        <div class="main">
            <Main />
        </div>
    </div>
</template>

<script>
import Main from './FirstVersion.vue'

export default {
    name: 'App',
    components: {
        Main
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');

body {
  margin: 0;
  font-size: 16px;
  font-family: 'Roboto';
}

#app {
    background-color: #0b032d;
    height: 100vh;
    width: 100vw;
    display: flex;
}

.menu {
    float: left;
    width: 14vw;
    height: 82vh;
    margin: 4vw;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1.5rem;
}

.main {
    float: left;
    margin: 4vw;
    width: 70vw;
    height: 82vh;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-block-start: 0;
    margin-top:2vw;
    width: 100%;
    text-align: center;
}

.menu-items {
    margin-bottom: 1vw;
    color: #f67e7d;
}

.menu-items:hover {
    color: white;
    background-color: #f67e7d;
    
}
</style>