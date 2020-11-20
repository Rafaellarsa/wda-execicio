<template>
    <div class="list">
        <ul>
            <li v-for="(person, index) in objectList" :key="index">
                <div class="person-info">
                    <img :src="person.profilePicture">
                    <p>{{ person.name }}</p>
                </div>
                <div id="removal-buttom" @click="removePersonByIndex(arguments[0])">
                    <div class="first-stroke">
                        <div class="second-stroke"></div>
                    </div>
                </div>
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
    },
    data() {
        return {

        }
    },
    methods: {
        removePersonByIndex(index) {
            console.log("oi")
            this.objectList.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.list {
    width: 100%;
    height: 300px;
    overflow-y: auto;
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
    justify-content: space-between;
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

.person-info {
    display: flex;
    align-items: center;
}

#removal-buttom {
  width: 25px;
  height: 25px;
  background-color: #621940;
}

.first-stroke {
  height: 25px;
  width: 2px;
  margin-left: 12px;
  background-color: white;
  transform: rotate(45deg);
  Z-index: 1;
}

.second-stroke {
  height: 25px;
  width: 2px;
  background-color: white;
  transform: rotate(90deg);
  Z-index: 2;
}
</style>