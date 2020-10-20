<template>
<div>
  <h2>欢迎光临宠物中心</h2>
  <div>会随机出现一个狗狗</div>
  <div v-if="loading">Loading.....</div>
  <img v-if="loaded" :src="result.message" />
  <div></div>
</div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  reactive
} from "vue";
import useUrlAxios from "../hooks/useURLAxios";
const app = {
  name: "Dog",
  setup() {
    const {
      result,
      loading,
      loaded
    } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );
    const state = reactive({
      hits: []
    })
    onMounted(async () => {
      const data = await fetch(
        'https://hn.algolia.com/api/v1/search?query=vue'
      ).then(rsp => rsp.json())
      state.hits = data.hits
      console.log(data)

    })

    return {
      result,
      loading,
      loaded
    };
  },
};
export default app;
</script>
