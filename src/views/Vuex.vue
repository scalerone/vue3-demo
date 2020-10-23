<template>
  <div class="count">我是数字：{{ state.count }}</div>
  <p>作者：{{ state.author }}</p>
  <a-button class="add" type="primary" @click="add">加</a-button>
  <a-button class="min" type="primary" @click="min">减</a-button>
  <a-button class="min" type="primary" @click="update">更新</a-button>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    // vuex4 通过 useStore 在组合API入口内声明获取全局状态实例 store
    const store = useStore()
    console.log('store', store)
    // 所有的状态变量都在 state 内
    const state = store.state

    const add = () => {
      store.commit('add', {
        count: state.count + 1,
      })
    }
    const min = () => {
      store.commit('min', {
        count: state.count - 1,
      })
    }
    const update = () => {
      store.dispatch('add') // 调用action中的add直接加到100
    }
    return {
      state,
      add,
      min,
      update,
    }
  },
}
</script>
