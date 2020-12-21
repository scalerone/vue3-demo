<template>
  <div class="page-wrapper">
    <div>
      <h2>watch</h2>
      <span>reactive: count 点击次数: </span>
      <span>{{ count }}</span>
      <a-button @click="addCount">点击增加</a-button>
    </div>
    <div>
      <span>ref: num 点击次数: </span>
      <span>{{ num }}</span>
      <a-button @click="addNum">点击增加</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
  computed,
} from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const state = reactive({
      count: 0,
      totalCount: computed(() => {
        return state.count * 2
      }),
      midObj: {
        innerObj: {
          size: 0,
        },
      },
    })
    const num = ref(0)

    const addCount = function() {
      state.count++
    }
    const addNum = function() {
      num.value++
    }
    // 监听单个属性
    watch(
      () => num.value,
      (newVal, oldVal) => {
        console.log(`count + num = ${newVal}`)
      }
    )
    // 监听单个属性, immediate
    watch(
      () => num.value,
      (newVal, oldVal) => {
        console.log(`count + num = ${newVal}, immediate=true`)
      },
      {
        immediate: true,
      }
    )
    // 监听单个属性, deep
    watch(
      () => state.midObj,
      (newVal, oldVal) => {
        console.log(`state.midObj = ${JSON.stringify(newVal)}, deep=true`)
      },
      {
        deep: true,
      }
    )
    setTimeout(() => {
      state.midObj.innerObj.size = 1
    }, 2000)
    // 监听多个属性
    watch(
      [num, () => state.midObj],
      ([numVal, midObj], [oldNumVal, OldMidObj]) => {
        console.log(`num is ${numVal}, midObj = ${midObj}`, midObj)
      }
    )
    // 副作用，会立即执行
    let callTimes = 0
    const stopEffect = watchEffect(() => {
      console.log('watchEffect is called!')
      const div = document.createElement('div')
      div.textContent = `num now is ${num.value}`
      document.body.appendChild(div)
      // 调用 5 次后，取消effect监听
      callTimes++
      if (callTimes >= 5) stopEffect()
    })

    return {
      ...toRefs(state),
      num,
      addCount,
      addNum,
    }
  },
})
</script>

<style scoped></style>
