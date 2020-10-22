<template>
<div>
  <h2>vuerouter4.x</h2>
  <div>
    <span> 接收到的路由参数为</span>
    <ul>
      <li v-for="(item,index) in params.path" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
  <div>
    <a-button type="primary" @click="redirect">路由跳转到About页面</a-button>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import {
  useRouter,
  useRoute
} from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const {
      params,
    } = route

    console.log('router', router)
    console.log('route', route)
    console.log('route query', params)

    const redirect = () => {
      router.push({
        // name: 'About',
        path: '/about',
        query: {
          ...route.query,
        },
      })
    }
    return {
      redirect,
      params
    }
  }
})
</script>

<style scoped>

</style>
