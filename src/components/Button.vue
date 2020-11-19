<template>
    <button @click="$emit('click')">Submit</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        formName: String
    }
}
</script>

<style scoped>
Button {
    width: 80%;
    justify-content: center;
    margin-top: 1rem;
}
</style>