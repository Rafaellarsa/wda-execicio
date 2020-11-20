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

ul {
    list-style-type: square;
    color: #f67e7d;
}

p {
    color: #0b032d;
}
</style>