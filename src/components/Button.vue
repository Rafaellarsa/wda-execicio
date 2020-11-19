<template>
    <button type="submit" form={list} value="Submit">Submit</button>
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

</style>