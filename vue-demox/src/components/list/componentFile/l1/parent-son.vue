<template>
  <div>
		<div>父组件传来的数据： {{fData}}</div>

		<button @click="click1">响应父组件的事件1</button>

		<div>{{title}}</div>

		<hr>

		<input type="text" v-model="num">

		<button @click="click2">输入一个数字测试响应父组件的事件2</button>

		<div>{{num}}</div>

		<hr>

		<div>
			<p>Prop  ; 英文翻译是支柱，支撑，道具的意思</p>
			<p>vue里通过 Prop 向子组件传递数据，一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。</p>
			<router-link to="https://cn.vuejs.org/v2/guide/components-props.html">Prop 官方文档</router-link>
			<ol>
				<li>eventName：这是一个事件名，会绑定一个方法。当组件触发事件后，将调用这个方法。</li>
				<li>…args：附加参数，会被抛出，由上述绑定的方法接收使用。</li>
				<li>它是一个触发当前实例上的事件。附加参数都会传给监听器回调。</li>
			</ol>
		</div>
	

  </div>
</template>

<script>


export default {
	props:{
		fData:String
	},
    data () {
        return{
			title :'',
			num:0
        	}
		},
		methods:{
			//1、获取父元素， 然后调用想用的方法
			click1(){
				console.log(this.$parent)	
				this.title = this.$parent.toSon()
			},
			//2、通过this.$emit()去触发父组件中子组件标签上的自定义事件，可以传值
			click2(){
				// console.log(this.$emit)
				this.$emit('toSon222', this.num)
			}
			//一般用这两种就够了
		}
   
}


</script>
<style>
</style>

