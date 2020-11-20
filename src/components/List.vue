<template>
    <div class="list">
        <ul>
            <li v-for="(person, index) in objectList" :key="index">
                <img :src="person.profilePicture">
                <p>{{ person.name }}</p>
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
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    margin-bottom: 1vw;
    border: 0.15rem solid #f67e7d;
    padding: 0.5vw;
    align-items: center;
}

p {
    color: #0b032d;
    margin: 0 1.5vw;
    font-size: 2rem;
}

img {
    width: 5vw;
    height: 5vw;
}
</style>