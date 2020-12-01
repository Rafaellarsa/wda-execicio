<template>
  <div class="first-version">
    <div class="column">
      <left-screen buttonMessage="Adicionar" @person-submitted="addPerson" />
    </div>
    <div class="column">
      <right-screen v-model="peopleList" />
    </div>
  </div>
</template>

<script>
import RightScreen from './components/RightScreen.vue'
import LeftScreen from './components/LeftScreen.vue'
import PeopleListHandler from './utils/PeopleListHandler'

export default {
  name: 'FirstVersion',
  components: {
    "right-screen": RightScreen,
    "left-screen": LeftScreen
  },
  computed: {
    peopleList() {
      return PeopleListHandler.getList(this)
    }
  },
  methods: {
    addPerson(newPerson) {
      const copyList = [...this.peopleList]
      copyList.push(newPerson)
      PeopleListHandler.setList(this, copyList)
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