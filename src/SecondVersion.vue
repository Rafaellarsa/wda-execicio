<template>
    <div class="second-version">
        <div class="add-person-button">
            <Button @click="onClick" />
        </div>

        <div id="addPersonModal" class="add-person-modal">
            <div class="add-person-modal-content">
                <span class="close-modal" @click="close">&times;</span>
                <LeftScreen @person-submitted="addPerson" />
            </div>
        </div>

        <List :peopleList="peopleList" />
    </div>
</template>

<script>
import List from './components/List'
import Button from './components/Button'
import LeftScreen from './components/LeftScreen'

var addPersonModal;

export default {
    name: 'SecondVersion',
    components: {
        List,
        Button,
        LeftScreen
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









/* The Modal (background) */
.add-person-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.add-person-modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close-modal {
  color: #aaa;
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