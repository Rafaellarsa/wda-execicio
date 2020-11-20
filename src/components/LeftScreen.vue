<template>
    <div class="form">
            <input type="text" placeholder="Nome da pessoa" v-model="name">
            <input type="url" placeholder="URL da foto de perfil" v-model="profilePicture">
            <Button list="form" @click="onClick" />
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'LeftScreen',
    components: {
        Button
    },
    data() {
        return {
            name: "",
            profilePicture: ""
        }
    },
    methods: {
        onClick() {
            let person = {
                name: this.name,
                profilePicture: this.profilePicture
            }
            this.$emit('person-submitted', person)
            this.name = ""
            this.profilePicture = ""
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