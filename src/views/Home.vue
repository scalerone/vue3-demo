<template>
<img alt="Vue logo" src="../assets/logo.png">
<div>
  <h2>欢迎光临红浪漫洗浴中心</h2>
  <div>请选择一位美女为你服务</div>
</div>
<div>
  <button v-for="(item, index) in girls" v-bind:key="index" @click="selectGirlFun(index)">{{ index }} : {{ item }} </button>
  <div>你选择了【{{ selectGirl }}】为你服务</div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs
} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: 'Home',
  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    //http://www.liulongbin.top:8085/#/?id=_4-reactive
    return {
      ...toRefs(data),
    }
  }
});
</script>
