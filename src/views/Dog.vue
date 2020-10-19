<template>
<div>
  <h2>欢迎光临红浪漫洗浴中心</h2>
  <div>会随机出现一个狗狗</div>
  <div v-if="loading">Loading.....</div>
  <img v-if="loaded" :src="result.message" />
  <div></div>
</div>
</template>

<script lang="ts">
import {
  ref
} from "vue";
import useUrlAxios from "../hooks/useURLAxios";
const app = {
  name: "App",
  setup() {
    const {
      result,
      loading,
      loaded
    } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );

    return {
      result,
      loading,
      loaded
    };
  },
};
export default app;
</script>
