<template>
  <div class="first-version">
    <div class="column">
      <AddPersonScreen buttonMessage="Adicionar" @person-submitted="addPerson" />
    </div>
    <div class="column">
      <RightScreen :peopleList="peopleList" />
    </div>
  </div>
</template>

<script>
import RightScreen from './components/RightScreen.vue'
import AddPersonScreen from './components/AddPersonScreen.vue'

export default {
  name: 'FirstVersion',
  components: {
    RightScreen,
    AddPersonScreen
  },
  data () {
    return {
      peopleList: [{profileName: "Joice", profilePictureURL: "https://avatars2.githubusercontent.com/u/23100392?s=460&u=39ef99a6a5bee8145036e5142cb927e8faf60c1c&v=4"},
      {profileName: "Samir", profilePictureURL: "https://avatars2.githubusercontent.com/u/3485190?s=460&u=01b4f7808a7dbfccf0748d311067cb19e8bfa11b&v=4"}]
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