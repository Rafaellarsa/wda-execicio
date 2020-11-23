<template>
    <div class="second-version">
        <div class="add-person-button">
            <Button @click="onClick" />
        </div>

        <div id="addPersonModal" class="add-person-modal">
            <div class="add-person-modal-content">
<!-- Muda o nome dessa classe -->
                <span class="close" @click="close">&times;</span>
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
            peopleList: []
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
.close {
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

.list {
    margin: 2vw;
    margin-top: 0;
}
</style>