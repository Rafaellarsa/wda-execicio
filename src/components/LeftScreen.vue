<template>
    <div class="form">
        <form action="" id="form">
            <input type="text" name="item" v-model="item">
            <Button list="form" @click="onClick" />
        </form>
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
            item: null
        }
    },
    methods: {
        onClick(event) {
            console.log(event)
            let listItem = {
                item: this.item
            }
            this.$emit('item-submitted', listItem)
            this.item = null
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