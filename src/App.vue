<template>
  <div id="app">
    <div class="column">
      <LeftScreen />
    </div>
    <div class="column">
      <RightScreen msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import RightScreen from './components/RightScreen.vue'
import LeftScreen from './components/LeftScreen.vue'

export default {
  name: 'App',
  components: {
    RightScreen,
    LeftScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

.column {
  float: left;
  width: 50%
}
</style>
