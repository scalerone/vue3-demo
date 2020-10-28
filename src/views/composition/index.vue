<template>
<h1>Composition API</h1>
  
  <router-link to="/composition/reactive">reactive && ref </router-link> |
  
   

	<div class="child">
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>
<style  scoped>
.child {
  margin-top:50px;
	height: 100%;
  border: 1px darkcyan dashed;
}
</style>
