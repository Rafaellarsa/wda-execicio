<template>
    <div id="addPersonModal" class="add-person-modal">
        <div class="add-person-modal-content">
            <span class="close-modal" @click="$emit('close')">&times;</span>
            <LeftScreen @person-submitted="person = arguments[0], $emit('person-submitted', person)" />
        </div>
    </div>
</template>

<script>
import LeftScreen from './LeftScreen'

export default {
    name: 'AddPersonModal',
    components: {
        LeftScreen
    }
}

</script>

<style>

</style>