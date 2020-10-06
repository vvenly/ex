<template>
  <div>

		<h3>路由模式</h3>

		<div>
			<p>路由</p>
			<p>文档： <router-link to="https://router.vuejs.org/zh/guide/essentials/history-mode.html">点击跳转</router-link></p>
			<div>
				<p><code>vue-router</code> 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。</p>
			</div>
			<div>
				<ul>
					<li>hash —— 即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。比如这个 URL：http://www.abc.com/#/hello，hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。</li>
					<li>history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。</li>
					<li>因此可以说，hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由.</li>
				</ul>
			</div>

			<hr>

			<p>从hash 改为 history 时， 只需在路由配置上加一句： mode: 'history', 即可。</p>
			<p>不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，
				<br>
				如果后台没有正确的配置，当用户在浏览器直接访问就会返回 404, 具体后台配置文档中有</p>
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

