<template>
  <div class="first-version">
    <div class="column">
      <left-screen buttonMessage="Adicionar" @person-submitted="addPerson" />
    </div>
    <div class="column">
      <right-screen :peopleList="peopleList" />
    </div>
  </div>
</template>

<script>
import RightScreen from './components/RightScreen.vue'
import LeftScreen from './components/LeftScreen.vue'

export default {
  name: 'FirstVersion',
  components: {
    "right-screen": RightScreen,
    "left-screen": LeftScreen
  },
  computed: {
    peopleList() {
      return this.$store.state.peopleList
    }
  },
  methods: {
    addPerson(newPerson) {
      this.$store.commit('addPerson', newPerson)
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