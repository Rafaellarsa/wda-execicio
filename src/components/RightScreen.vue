<template>
  <div class="right">
    <List :peopleList="peopleList" />
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'RightScreen',
  components: {
    List
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