<template>
  <div class="page-wrapper" ref="root">
    <div>
      <h2>computed</h2>
      <div>
        <span>reactive: count 点击次数: </span>
        <span>{{ count }}</span>
        <a-button @click="addCount">点击增加</a-button>
      </div>
      <div>doubleCount: {{ doubleCount }}</div>
    </div>
    <div>
      <span>ref: num 点击次数: </span>
      <span>{{ num }}</span>
      <a-button @click="addNum">点击增加</a-button>
      <div>totalCount: {{ totalCount }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  computed,
  onMounted,
} from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const state: any = reactive({
      count: 0,
      double: computed(() => {
        return state.count * 2
      }),
    })
    const num = ref(0)

    const addCount = function() {
      state.count++
    }
    const addNum = function() {
      num.value++
    }

    // only getter
    const totalCount = computed(() => state.count + num.value)
    // getter & setter
    const doubleCount = computed({
      get() {
        return state.count * 2
      },
      set(newVal) {
        state.count = newVal / 2
      },
    })
    doubleCount.value = 4
    console.log(doubleCount.value) // 2
    const root = ref(null)
    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(root.value) // <div>这是根元素</div>
    })
    //https://www.vue3js.cn/docs/zh/guide/composition-api-template-refs.html

    return {
      root,
      ...toRefs(state),
      num,
      totalCount,
      doubleCount,
      addCount,
      addNum,
    }
  },
})
</script>

<style scoped></style>
