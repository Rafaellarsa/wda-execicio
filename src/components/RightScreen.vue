<template>
  <div class="right">
    <people-list v-model="peopleList" />
  </div>
</template>

<script>
import PeopleList from './PeopleList.vue'

export default {
  name: 'RightScreen',
  components: {
    "people-list": PeopleList
  },
  model: {
    prop: 'peopleList',
    emits: ['update:peopleList']
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