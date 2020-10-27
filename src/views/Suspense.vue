<template>
<button @click="loadAsyncComponent">点击加载异步组件</button>
  <Suspense v-if="loadAsync">
    <template #default>
      <AsyncComponent></AsyncComponent>
    </template>
    <template #fallback>
      <div class="loading">loading...</div>
    </template>
  </Suspense>

</template>
<script lang="ts">
import { defineComponent,defineAsyncComponent,ref } from 'vue'

export default defineComponent({
  components: {
      AsyncComponent: defineAsyncComponent(() => {
      return import("../components/AsyncComponent/index.vue");
    })
  },
  setup() {
    const loadAsync = ref(false)
    const loadAsyncComponent = ()=>{
      loadAsync.value = true;
    }
    return {
      loadAsync,
      loadAsyncComponent
    }
  },
})
</script>

<style scoped></style>
