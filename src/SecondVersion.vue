<template>
    <div class="second-version">
        <div class="add-person-button">
            <Button @click="onClick" buttonMessage="Adicionar" />
        </div>

        <AddPersonModal @close="close" @person-submitted="addPerson" />
        <List :peopleList="peopleList" />
    </div>
</template>

<script>
import List from './components/List'
import Button from './components/Button'
import AddPersonModal from './components/AddPersonModal'

var addPersonModal;

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
                    {profileName: "Samir", profilePictureURL: "https://avatars2.githubusercontent.com/u/3485190?s=460&u=01b4f7808a7dbfccf0748d311067cb19e8bfa11b&v=4"}]
        }
    },
    methods: {
        onClick() {
            addPersonModal.style.display = "block";
        },
        close() {
            addPersonModal.style.display = "none";
        },
        addPerson(listItem) {
            this.peopleList.push(listItem);
            addPersonModal.style.display = "none";
        }
    },
    mounted: function() {
        addPersonModal = document.getElementById("addPersonModal");
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

.add-person-modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.add-person-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: none;
  width: 80%;
}

.close-modal {
  color: #621940;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>