<template>
    <div ref="editPersonModal" class="edit-person-modal">
        <div class="edit-person-modal-content">
            <span class="close-modal" @click="$emit('close')">&times;</span>
            <div class="form">
                <input type="text" placeholder="Nome da pessoa" v-model="profileName" />
                <input type="url" placeholder="URL da foto de perfil" v-model="profilePictureURL" />
                <Button class="edit-button" list="form" @click="onClick" buttonMessage="Editar" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button';

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
        },
        visible: {
            default: false
        }
    },
    data() {
        return {
            profileName: "",
            profilePictureURL: "",
            editPersonModal: null
        }
    },
    watch: {
        value(newValue) {
            this.profileName = newValue.profileName;
            this.profilePictureURL = newValue.profilePictureURL;
        },
        visible(newVisible) {
            console.log(newVisible);
            if (newVisible) {
                this.editPersonModal.style.visibility = "visible";
            } else {
                this.editPersonModal.style.visibility = "hidden";
            }
        }
    },
    mounted() {
        this.editPersonModal = this.$refs.editPersonModal;
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
            this.$emit('click-confirm')
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


.edit-person-modal {
  /* display: none; */
  visibility: hidden;
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

.edit-person-modal-content {
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