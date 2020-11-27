<template>
  <div class="right">
    <people-list :peopleList="peopleList" />
  </div>
</template>

<script>
import PeopleList from './PeopleList.vue'

export default {
  name: 'RightScreen',
  components: {
    "people-list": PeopleList
  },
  props: {
    peopleList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.right {
  margin: 5vw;
}
</style>