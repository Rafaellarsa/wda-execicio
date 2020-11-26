<template>
    <div id="app">
        <div class="menu">
            <button class="menu-items" @click="pageVersion='firstVersion'">Versão 1</button>
            <button class="menu-items" @click="pageVersion='secondVersion'">Versão 2</button>
        </div>
        <div class="main" v-if="pageVersion === 'firstVersion'">
            <FirstVersion />
        </div>
        <div class="main" v-if="pageVersion === 'secondVersion'">
            <SecondVersion />
        </div>
    </div>
</template>

<script>
import FirstVersion from './FirstVersion.vue';
import SecondVersion from './SecondVersion.vue';

export default {
    name: 'App',
    components: {
        FirstVersion,
        SecondVersion
    },
    data() {
        return {
            pageVersion: 'firstVersion'
        }
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
}

.menu-items {
    color: #f67e7d;
    background-color: white;
    border: none;
    margin: 0;
    width: 100%;
    font-size: 1.5rem;
    font-family: 'Roboto';
    font-weight: 700;
}

.menu-items:hover {
    color: white;
    background-color: #f67e7d;
}

.menu-items:focus {
    outline: none;
}

.main {
    float: left;
    margin: 4vw;
    width: 70vw;
    height: 82vh;
}
</style>