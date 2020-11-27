<template>
    <div class="second-version">
        <div class="add-person-button">
            <default-button @click="onClickAdd" buttonMessage="Adicionar" />
        </div>

        <edit-person-modal :visible="isAddPersonModalVisible" @close="closeAddPerson" @person-submitted="addPerson" buttonMessage="Adicionar" />
        <people-list :peopleList="peopleList" />
    </div>
</template>

<script>
import PeopleList from './components/PeopleList'
import DefaultButton from './components/DefaultButton'
import EditPersonModal from './components/EditPersonModal'

export default {
    name: 'SecondVersion',
    components: {
        "people-list": PeopleList,
        "default-button": DefaultButton,
        "edit-person-modal": EditPersonModal
    },
    data() {
        return {
        isAddPersonModalVisible: false
        }
    },
    computed: {
        peopleList() {
            return this.$store.state.peopleList
        }
    },
    methods: {
        onClickAdd() {
            this.isAddPersonModalVisible = true;
        },
        closeAddPerson() {
            this.isAddPersonModalVisible = false;
        },
        addPerson(newPerson) {
            this.$store.commit('addPerson', newPerson);
            this.isAddPersonModalVisible = false;
        }
    }
}
</script>

<style>
.second-version {
    background-color: white;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}

.add-person-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

Button {
    margin: 2vw;
}

.list {
    margin: 2vw;
    margin-top: 0;
}
</style>