<template>
    <div ref="addPersonModal" :style="{ display: addPersonModalVisibility }" class="add-person-modal">
        <div class="add-person-modal-content">
            <span class="close-modal" @click="$emit('close')">&times;</span>
            <AddPersonScreen buttonMessage="Adicionar" @person-submitted="person = arguments[0], $emit('person-submitted', person)" />
        </div>
    </div>
</template>

<script>
import AddPersonScreen from './AddPersonScreen';

export default {
    name: 'AddPersonModal',
    components: {
        AddPersonScreen
    },
    data() {
        return {
            addPersonModal: null
        }
    },
    props: {
        visible: Boolean
    },
    computed: {
        addPersonModalVisibility: function() {
            if (this.visible) {
                 return "block";
            } else {
                return "none";
            }
        }
    }
}
</script>

<style>
.add-person-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.add-person-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: none;
  width: 80%;
}

.close-modal {
  color: #621940;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>