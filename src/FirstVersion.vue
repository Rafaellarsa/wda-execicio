<template>
  <div class="first-version">
    <div class="column">
      <LeftScreen @person-submitted="addPerson" />
    </div>
    <div class="column">
      <RightScreen :peopleList="peopleList" />
    </div>
  </div>
</template>

<script>
import RightScreen from './components/RightScreen.vue'
import LeftScreen from './components/LeftScreen.vue'

export default {
  name: 'FirstVersion',
  components: {
    RightScreen,
    LeftScreen
  },
  data () {
    return {
      peopleList: []
    }
  },
  methods: {
    addPerson(listItem) {
      this.peopleList.push(listItem);
    }
  }
}
</script>

<style>
.first-version {
  background-color: #0b032d;
  height: 100%;
  margin: 0;
}

.column {
  float: left;
  width: 50%;
  height: 100%;
  background-color: white;
}
</style>