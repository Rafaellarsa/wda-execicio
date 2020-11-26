<template>
  <div class="right">
    <PeopleList :peopleList="peopleList" />
  </div>
</template>

<script>
import PeopleList from './PeopleList.vue'

export default {
  name: 'RightScreen',
  components: {
    PeopleList
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