<template>
    <div class="list">
        <ul>
            <li v-for="(item, index) in objectList" :key="index">
                <p>{{ item }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        objectList: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
.list {
    width: 100%
}
</style>