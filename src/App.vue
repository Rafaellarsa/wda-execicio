<template>
  <div id="app">
    <div class="column">
      <LeftScreen @item-submitted="addItem" />
    </div>
    <div class="column">
      <RightScreen />
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
      console.log(listItem)
    }
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
