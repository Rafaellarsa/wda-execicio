<template>
  <div id="app">
    <div class="column">
      <LeftScreen @item-submitted="addItem" />
    </div>
    <div class="column">
      <RightScreen :objectList="list" />
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
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    addItem(listItem) {
      this.list.push(listItem);
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
}

.column {
  float: left;
  width: 42vw;
  height: 80vh;
  margin: 4vw;
  background-color: white;
}
</style>
