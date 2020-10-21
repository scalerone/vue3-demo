<template>
<div>
  <input type="text" v-model="query" @keydown="setQuery" />
  <button @click="setQuery">搜索</button>
  <div v-if="loading">Loading ...</div>
  <div v-else-if="error">Something went wrong ...</div>
  <ul>
    <li v-for="item of data.hits" :key="item.objectID">
      <a :href="item.url">{{item.title}}</a>
    </li>
  </ul>

</div>
</template>

<script lang="ts">
import {
  reactive,
  onMounted,
  toRefs,
  ref
} from 'vue'
import useRequest from '../hooks/useRequest'

export default {
  name: 'News',
  setup() {
    const query = ref('vue')
    const {
      data,
      loading,
      error,
      run
    } = useRequest({
      url: 'https://hn.algolia.com/api/v1/search',
      params: {
        query
      }
    })

    onMounted(() => {
      run()
    })
    // console.log('data', data)
    return {
      data,
      query,
      error,
      loading,
      setQuery: run
    }
  }
}
</script>

<style scoped>

</style>
