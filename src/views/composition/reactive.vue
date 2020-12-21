<template>
  <div class="page-wrapper">
    <div>
      <span>reactive:  count 点击次数: </span>
      <span>{{ count }}</span>
      <a-button @click="addCount">点击增加</a-button>
    </div>
    <div>
      <span>ref:  num 点击次数: </span>
      <span>{{ num }}</span>
      <a-button @click="addNum">点击增加</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const state = reactive({
      count: 0,
    })
    const num = ref(0)

    const addCount = function() {
      state.count++
    }
    const addNum = function() {
      num.value++
    }

    return {
      // 这样展开后state property会失去响应式，因为是取值返回，不是引用
      // ...state,
      ...toRefs(state),//toRefs API 用来提供解决此约束的办法——它将响应式对象的每个 property 都转成了相应的 
      num,
      addCount,
      addNum,
    }
  },
})
</script>

<style scoped></style>
