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

#newitem {
    width: 80%
}

.form {
    justify-content: center
}
</style>