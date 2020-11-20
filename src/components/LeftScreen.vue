<template>
    <div class="form">
            <input type="text" v-model="text">
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
            text: ""
        }
    },
    methods: {
        onClick() {
            this.$emit('item-submitted', this.text)
            this.text = ""
        }
    }
}
</script>

<style scoped>

input {
    width: 100%;
    height: 2rem;
    border-color: #f67e7d;
    border-style: solid;
    font-family: 'Roboto';
}

Button {
    width: 100%;
    margin-top: 1vw;
}

.form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5vw;
}
</style>