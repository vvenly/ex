<template>
  <div>
    <h3>Vue Router 是 Vue.js 官方的路由管理器。</h3>

		<div>
			<ol>
				<li>Vue.js 路由需要载入 <router-link to="https://github.com/vuejs/vue-router">	vue-router 库</router-link></li>
				<li>中文文档 ： <router-link to="https://router.vuejs.org/zh/">点击跳转</router-link> </li>
			</ol>
		</div>

		<hr>

		<div>
			<p>1、标签：'router-link'</p>
			<p>
				&lt;router-link to='url'&gt; 是一个组件，该组件用于设置一个导航链接，切换不同 HTML 内容。 to 属性为目标地址， 即要显示的内容。
			</p>
			<p> 相关属性文档： <router-link to="https://www.runoob.com/vue2/vue-routing.html">点击跳转</router-link></p>

			<p>
				<img src="/static/img/r1.jpg" alt="">
			</p>
		</div>
		
		<hr>


		<div>
			<p>2、动态路由</p>
			<p>有时候需要在地址后面拼上动态id 等参数，这个时候就需要用到动态路由，

				 <router-link to="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96">文档</router-link>
			</p>

			<div>
				<p>示例：</p>
				<div class="language-js extra-class"><pre class="language-js"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  template<span class="token operator">:</span> <span class="token string">'&lt;div&gt;User&lt;/div&gt;'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 动态路径参数 以冒号开头</span>
    <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/user/:id'</span><span class="token punctuation">,</span> component<span class="token operator">:</span> User <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>
			</div>

		</div>



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

