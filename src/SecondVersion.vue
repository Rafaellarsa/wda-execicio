<template>
    <div class="second-version">
        <div class="add-person-button">
            <Button @click="onClickAdd" buttonMessage="Adicionar" />
        </div>

        <AddPersonModal :visible="isAddPersonModalVisible" @close="closeAddPerson" @person-submitted="addPerson" />
        <List :peopleList="peopleList" />
    </div>
</template>

<script>
import List from './components/List'
import Button from './components/Button'
import AddPersonModal from './components/AddPersonModal'

export default {
    name: 'SecondVersion',
    components: {
        List,
        Button,
        AddPersonModal
    },
    data() {
        return {
        peopleList: [{profileName: "Joice", profilePictureURL: "https://avatars2.githubusercontent.com/u/23100392?s=460&u=39ef99a6a5bee8145036e5142cb927e8faf60c1c&v=4"},
                    {profileName: "Samir", profilePictureURL: "https://avatars2.githubusercontent.com/u/3485190?s=460&u=01b4f7808a7dbfccf0748d311067cb19e8bfa11b&v=4"}],
        isAddPersonModalVisible: false
        }
    },
    methods: {
        onClickAdd() {
            this.isAddPersonModalVisible = true;
        },
        closeAddPerson() {
            this.isAddPersonModalVisible = false;
        },
        addPerson(listItem) {
            this.peopleList.push(listItem);
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