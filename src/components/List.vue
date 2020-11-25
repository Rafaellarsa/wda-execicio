<template>
    <div class="list">
        <ul>
            <li v-for="(person, index) in peopleList" :key="index">
                <div class="person-info">
                    <img :src="person.profilePictureURL">
                    <p>{{ person.profileName }}</p>
                </div>
                <div class="icons">
                    <font-awesome-icon icon="user-edit" :style="{ color: '#621940' }" @click="onClickEdit(person, index)" />

                    <div class="removal-buttom" @click="removePersonByIndex(index)">
                        <div class="first-stroke"><div class="second-stroke"></div></div>
                    </div>
                </div>

            </li>
        </ul>

        <EditPersonModal v-model="selectedPerson" :visible="isEditPersonVisible" @click-confirm="editPersonByIndex(selectedPerson, selectedIndex)" @close="closeEditPerson" />
    </div>
</template>

<script>
import EditPersonModal from './EditPersonModal'


export default {
    name: 'List',
    components: {
        EditPersonModal
    },
    props: {
        peopleList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            person: Object,
            selectedPerson: Object,
            selectedIndex: Number,
            isEditPersonVisible: Boolean
        }
    },
    methods: {
        removePersonByIndex(index) {
            this.peopleList.splice(index, 1);
        },
        editPersonByIndex(newPerson, index) {
            this.peopleList[index].profileName = newPerson.profileName;
            this.peopleList[index].profilePictureURL = newPerson.profilePictureURL;
            this.isEditPersonVisible = false;
        },
        onClickEdit(person, index) {
            this.selectedPerson = person;
            this.selectedIndex = index;
            this.isEditPersonVisible = true;
        },
        closeEditPerson() {
            this.isEditPersonVisible = false;
        }
    },
    // mounted: function() {
    //     editPersonModal = document.getElementById("editPersonModal");
    // }
}
</script>

<style scoped>
.list {
    width: 100%;
    height: 60vh;
    overflow-y: auto;
}

::-webkit-scrollbar {
    width: 1rem;
    background-color: #f67e7d;
}

::-webkit-scrollbar-thumb {
    background-color: #621940;
}

ul {
    margin-top: 0;
}

li {
    display: flex;
    width: 90%;
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

.icons {
    display: flex;
    align-items: center;
}

font-awesome-icon {
    background-color: #621940;
}

.removal-buttom {
  width: 25px;
  height: 25px;
  background-color: #621940;
  margin-left: 1vw;
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