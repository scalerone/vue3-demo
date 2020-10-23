<template>
  <a-button @click="openModal" type="primary">
    open modal(With teleport)
  </a-button>
  <teleport to="#endofbody">
    <div v-if="isModalOpen" class="modal">
      我是model模态框
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  setup() {
     const isModalOpen = ref(false)
    const openModal = function () {
      isModalOpen.value = !isModalOpen.value
    }
    return {isModalOpen,openModal}
  },
})
</script>

<style >
  .modal {
   width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }

</style>
