<template>
    <div class="list">
        <ul>
            <li v-for="(item, index) in shownList" :key="index">
                <p>{{ item }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        shownList: Object
    }
}
</script>

<style scoped>
.list {
    width: 100%
}
</style>