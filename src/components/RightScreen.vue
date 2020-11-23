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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  margin: 5vw;
}
</style>
