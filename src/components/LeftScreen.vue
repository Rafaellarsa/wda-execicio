<template>
    <div class="form">
        <form action="">
            <input type="text" name="newitem" id="newitem">
            <Button list="newitem" />
        </form>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'LeftScreen',
    components: {
        Button
    }
}
</script>
#newitem {
    width: 100%
}
<style scoped>

</style>