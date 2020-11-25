<template>
    <div id="editPersonModal" class="edit-person-modal">
        <div class="edit-person-modal-content">
            <span class="close-modal" @click="$emit('close')">&times;</span>
            <div class="form">
                <input type="text" placeholder="Nome da pessoa" v-model="profileName" />
                <input type="url" placeholder="URL da foto de perfil" v-model="profilePictureURL" />
                <Button class="edit-button" list="form" @click="onClick" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button'

export default {
    name: 'EditPersonModal',
    components: {
        Button
    },
    props: {
        value: {
            default: {
                profileName: "",
                profilePictureURL: ""
            }
        }
    },
    data() {
        return {
            profileName: "",
            profilePictureURL: ""
        }
    },
    watch: {
        value(newValue) {
            this.profileName = newValue.profileName;
            this.profilePictureURL = newValue.profilePictureURL;
        },
    },
    methods: {
        updateParameters() {
            this.profileName = this.value.profileName;
            this.profilePictureURL = this.value.profilePictureURL;
        },
        onClick() {
            let person = {
                profileName: this.profileName,
                profilePictureURL: this.profilePictureURL
            }
            this.$emit('input', person)
            this.$emit('person-submitted')
            this.$emit('close')
            this.profileName = ""
            this.profilePictureURL = ""
        }
    }
}
</script>

<style>
input {
    width: 100%;
    height: 2rem;
    margin-bottom: 1vw;

    border-color: #f67e7d;
    border-style: solid;
    font-family: 'Roboto';
    color: #0b032d;
}

input::placeholder {
    color: #0b032d;
    opacity: 0.5;
}

input:focus {
    outline: none;
    border-color: #621940;
}

.edit-button {
    width: 100%;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5vw;
}


/* The Modal (background) */
.edit-person-modal {
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
.edit-person-modal-content {
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