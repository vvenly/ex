<template>
  <div>

		<div>
			<p>3、编程式路由</p>
			<p>文档： <router-link to="https://router.vuejs.org/zh/guide/essentials/navigation.html">点击跳转</router-link></p>
			<div>
					<p>语法： router.push(location, onComplete?, onAbort?)</p>
					<div>
						注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。

想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

<p>当你点击 <code>&lt;router-link&gt;</code> 时，这个方法会在内部调用，所以说，点击 <code>&lt;router-link :to="..."&gt;</code> 等同于调用 <code>router.push(...)</code>。</p>
					</div>
			</div>
		</div>

		<hr>





  </div>
</template>

<script>


export default {
    data () {
        return{
           
        }
    },
   
}


</script>
<style>
</style>

