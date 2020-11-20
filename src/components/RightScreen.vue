<template>
  <div class="right">
    <List :objectList="objectList" />
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
        objectList: {
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
