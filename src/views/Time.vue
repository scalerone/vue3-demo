<template>
<div>
  <div>{{ count }}</div>
  <div>{{ nowTime }}</div>
  <div>
    <button @click="getNowTime">显示时间</button>
  </div>
</div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  ref
} from 'vue'

import {
  nowTime,
  getNowTime
} from '../hooks/useNowTime.ts'
export default {
  setup() {
    const state = reactive({
      count: 0,
    })
    // const nowTime = ref("00:00:00");
    // const getNowTime = () => {
    //   const now = new Date();
    //   const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    //   const minu = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    //   const sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    //   nowTime.value = hour + ":" + minu + ":" + sec;
    //   setTimeout(getNowTime, 1000); //每一秒执行一次这个方法
    // };
    return {
      ...toRefs(state),
      nowTime,
      getNowTime
    }
  }
}
</script>
