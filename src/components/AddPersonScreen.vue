<template>
    <div class="form">
            <input type="text" placeholder="Nome da pessoa" v-model="profileName">
            <input type="url" placeholder="URL da foto de perfil" v-model="profilePictureURL">
            <Button @click="onClick" buttonMessage="Adicionar" />
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'AddPersonScreen',
    components: {
        Button
    },
    data() {
        return {
            profileName: "",
            profilePictureURL: ""
        }
    },
    methods: {
        onClick() {
            let person = {
                profileName: this.profileName,
                profilePictureURL: this.profilePictureURL
            }
            this.$emit('person-submitted', person)
            this.profileName = ""
            this.profilePictureURL = ""
        }
    }
}
</script>

<style scoped>
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

Button {
    width: 100%;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5vw;
}
</style>