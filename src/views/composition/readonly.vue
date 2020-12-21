<template>
  <div>
    <h2>readonly</h2>
    <mark>readonly 修改只读属性会打印告警信息</mark>
    <br/>
    <span>count </span>
    <span>{{ count }}</span>
    <a-button @click="addCount">点击增加</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, watch, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    })
    const readonlyState = readonly(state)
    const addCount = function() {
      state.count++
    }
    // 监听只读属性，state.count修改后依然会触发readonlyState.count更新
    watch(
      () => readonlyState.count,
      (newVal, oldVal) => {
        console.log('readonly state has changed')
        setTimeout(() => {
          // 修改只读属性会打印告警信息，但是不会报错
          readonlyState.count = 666
        }, 1000)
      }
    )

    return { ...toRefs(state), addCount }
  },
})
</script>

<style scoped></style>
