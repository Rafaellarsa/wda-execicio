<template>
    <div :style="{ display: computedDisplayStyle }" class="modal">
        <div class="modal-content">
            <span class="close-modal" @click="$emit('close')">&times;</span>
            <div class="form">
                <input type="text" placeholder="Nome da pessoa" v-model="profileName" />
                <input type="url" placeholder="URL da foto de perfil" v-model="profilePictureURL" />
                <default-button class="edit-button" @click="onClick" :buttonMessage="buttonMessage" />
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from './DefaultButton';

export default {
    name: 'EditPersonModal',
    components: {
        "default-button": DefaultButton
    },
    data() {
        return {
            profileName: "",
            profilePictureURL: ""
        }
    },
    props: {
        visible: Boolean,
        buttonMessage: String,
        value: {
            default: () => ({
                profileName: "",
                profilePictureURL: ""
            })
        }
    },
    watch: {
        value(newValue) {
            this.profileName = newValue.profileName;
            this.profilePictureURL = newValue.profilePictureURL;
        }
    },
    computed: {
        computedDisplayStyle: function() {
            if (this.visible) {
                 return "block";
            } else {
                return "none";
            }
        }
    },
    methods: {
        onClick() {
            let person = {
                profileName: this.profileName,
                profilePictureURL: this.profilePictureURL
            };
            this.$emit('input', person);
            this.$emit('person-submitted', person);
            this.profileName = "";
            this.profilePictureURL = "";
        }
    }
}
</script>

<style>
.modal {
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

.modal-content {
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
</style>