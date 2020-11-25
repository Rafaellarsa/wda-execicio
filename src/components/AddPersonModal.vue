<template>
    <div id="addPersonModal" class="add-person-modal">
        <div class="add-person-modal-content">
            <span class="close-modal" @click="$emit('close')">&times;</span>
            <AddPersonScreen @person-submitted="person = arguments[0], $emit('person-submitted', person)" />
        </div>
    </div>
</template>

<script>
import AddPersonScreen from './AddPersonScreen'

export default {
    name: 'AddPersonModal',
    components: {
        AddPersonScreen
    }
}

</script>

<style>

</style>