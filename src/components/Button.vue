<template>
    <button type="submit" form={list} value="Submit" @click="$emit('click')">Submit</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        list: String
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