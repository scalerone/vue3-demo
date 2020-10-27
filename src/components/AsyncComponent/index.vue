<template>
  <div>{{ result }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AsyncSuspense',
  setup() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          result: 500
        })
      }, 1000)
    })
  }
})
</script>

<style lang="scss" scoped></style>
