<template>
<img alt="Vue logo" src="../assets/logo.png" />
<div>
  <h2>欢迎光临红浪漫洗浴中心</h2>
  <div>请选择一位美女为你服务</div>
</div>
<div>
  <button v-for="(item, index) in girls" v-bind:key="index" @click="selectGirlFun(index)">
    {{ index }} : {{ item }}
  </button>
  <div>你选择了【{{ selectGirl }}】为你服务</div>
</div>
<div>{{ overText }}</div>
<div><button @click="overAction">点餐完毕</button></div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  computed,
  watch
} from 'vue'

interface DataProps {
  girls: string[];
  selectGirl: string;
  count: number;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: 'Home',
  setup() {
    console.log('1-开始创建组件-----setup()')
    const data: DataProps = reactive({
      girls: ['大脚', '刘英', '晓红'],
      selectGirl: '',
      count: 0,
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
        data.count++;
        console.log(data.count)
      },
    })
    //http://www.liulongbin.top:8085/#/?id=_4-reactive
    onBeforeMount(() => {
      console.log('2-组件挂载到页面之前执行-----onBeforeMount()')
    })

    onMounted(() => {
      console.log('3-组件挂载到页面之后执行-----onMounted()')
    })
    onBeforeUpdate(() => {
      console.log('4-组件更新之前-----onBeforeUpdate()')
    })

    onUpdated(() => {
      console.log('5-组件更新之后-----onUpdated()')
    })

    // Vue2-- -- -- -- -- -- --vue3
    // beforeCreate - > setup()
    // created - > setup()
    // beforeMount - > onBeforeMount
    // mounted - > onMounted
    // beforeUpdate - > onBeforeUpdate
    // updated - > onUpdated
    // beforeDestroy - > onBeforeUnmount
    // destroyed - > onUnmounted
    // activated - > onActivated
    // deactivated - > onDeactivated
    // errorCaptured - > onErrorCaptured

    const overText = ref('honghong');
    const overAction = () => {
      overText.value = overText.value + '点餐完成 |'
      // document.title = overText.value;
      // data.count++;
      // console.log(data.count)

    };
    //watch监听一个或多个值
    // watch(overText, (newValue, oldValue) => {
    //   console.log(`new--->${newValue}`);
    //   console.log(`old--->${oldValue}`);
    //   document.title = newValue;
    // });
    const state: any = reactive({
      count: 0,
      double: computed(() => {
        return state.count * 2
      }),
      midObj: {
        innerObj: {
          size: 0
        }
      }
    })

    const totalCount = ref(0) // 监听单个属性, immediate
    watch(() => totalCount.value, (newVal, oldVal) => {
      console.log(`count + num = ${newVal}, immediate=true`)
    }, {
      immediate: true
    })

    watch([overText, () => data.selectGirl, () => data.count], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0] + '';
    }, {
      deep: true
    });

    return {
      ...toRefs(data),
      overText,
      overAction,
      totalCount
    }
  },
})
</script>
