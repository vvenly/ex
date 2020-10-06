<template>
  <div>
		<div><input type="text" v-model="val1"></div>
		<button @click='toParent'>点击给父组件传数据</button>

		<hr>

		<div>
			<ol>
				<li>父组件定义一个方法，并在组件标签上绑定该方法</li>
				<li>在子组件调用这个方法，并传参</li>
			</ol>
		</div>


		<hr>


		<div>
			<p>$emit()  ; 英文翻译是发出，发射的意思</p>
			<p>用法：  &nbsp; $emit( eventName, […args] )</p>
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
    data () {
        return{
           val1:''
        }
		},
		methods:{
			toParent(){
				this.$emit('getSon',this.val1)

				//getSon 父组件调用子组件的方法
				// this.$emit('getSon','from son val')
			}
		}
   
}


</script>
<style>
</style>

