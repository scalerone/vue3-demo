<template>
<div>
  <input type="text" v-model="input" />
  <button @click="setQuery">搜索</button>
  <div v-if="loading">Loading ...</div>
  <div v-else-if="error">Something went wrong ...</div>
  <ul>
    <li v-for="item of hits" :key="item.objectID">
      <a :href="item.url">{{item.title}}</a>
    </li>
  </ul>

</div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
  watch,
  watchEffect
} from 'vue'

export default {
  name: 'News',
  setup() {
    const state = reactive({
      query: 'vue',
      input: 'vue',
      hits: [],
      error: false,
      loading: false,
    })
    const fetchData = async (query: string) => {
      state.error = false
      state.loading = true
      try {
        const data = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        ).then(rsp => rsp.json())
        state.hits = data.hits
      } catch {
        state.error = true
      }
      state.loading = false

    }

    onMounted(() => {
      watchEffect(() => {
        fetchData(state.query)
      })
    })

    const setQuery = () => {
      state.query = state.input
    }
    return {
      ...toRefs(state),
      setQuery
    }
  }
}
</script>

<style scoped>

</style>
