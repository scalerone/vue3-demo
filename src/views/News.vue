<template>
<div>
  <input type="text" v-model="query" />
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
      hits: []
    })
    const fetchData = async (query: string) => {
      const data = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      ).then(rsp => rsp.json())
      state.hits = data.hits
    }

    onMounted(() => {
      watchEffect(() => {
        fetchData(state.query)
      })
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

</style>
