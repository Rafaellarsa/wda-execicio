<template>
    <button @click="$emit('click')">{{ buttonMessage }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonMessage: String
    }
}
</script>

<style scoped>
button {
    background-color: #f67e7d;
    color: white;
    font-family: 'Roboto';
    font-weight: 700;
    border: none;
    padding: 1.5rem;
    font-size: 1.5rem;
}

button:hover {
    background-color: #621940;
}

button:focus {
    outline: none;
}
</style>