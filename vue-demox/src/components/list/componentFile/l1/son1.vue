<template>
  <div>
		<div class="headline">父组件传来的数据： {{fData}}</div>

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
			<p>Prop 单向数据流, 修改父元素参数子元素会监听到，但是不可在子元素内修改 prop中的值</p>
			<router-link to="https://cn.vuejs.org/v2/guide/components-props.html">Prop 官方文档</router-link>
			<ol>
				<li>eventName：这是一个事件名，会绑定一个方法。当组件触发事件后，将调用这个方法。</li>
				<li>…args：附加参数，会被抛出，由上述绑定的方法接收使用。</li>
				<li>它是一个触发当前实例上的事件。附加参数都会传给监听器回调。</li>
			</ol>
		</div>

		<div>
			<!-- <mavon-editor :toolbars="toolbars" style="height:600px" v-model="codeValue" ref=md  /> -->
			<mavon-editor v-model="codeValue"/>
			<!-- <article class="markdown-body" style="text-align:left" v-html="codeValue"></article> -->
		</div>
	

  </div>
</template>

<script>

export default {
	props:{
		fData:String		// 最简单定义，只能是字符串格式

		//	其他
        //   propA:Number		必须是数字类型
        //   //必须是字符串或数字类型
        //   propB:[String,number]
        //   //布尔值,如果没有定义，默认值是true
        //   propC:{
        //     type:Boolean，
        //     default:true
        //   },
        //   //数字，而且是必传
        //   propD:{
        //     type:Number,
        //     required:true
        //   },
        //   //如果是数组或对象，默认值必须是一个函数来返回
        //   propE:{
        //     type:Array,
        //     default:function(){
        //         return [];
        //       }
        //   },
        //   //自定义一个验证函数
        //   propF:{
        //       validator:function (value){
        //         return value>10
        //      }
        //   }
	},
    data () {
        return{
			title :'',
			num:0,
			codeValue:"",
			toolbars: {
				bold: true, // 粗体
				italic: true, // 斜体
				header: true, // 标题
				underline: true, // 下划线
				strikethrough: true, // 中划线
				mark: true, // 标记
				superscript: true, // 上角标
				subscript: true, // 下角标
				quote: true, // 引用
				ol: true, // 有序列表
				ul: true, // 无序列表
				link: true, // 链接
				imagelink: true, // 图片链接
				code: false, // code
				table: true, // 表格
				fullscreen: true, // 全屏编辑
				readmodel: true, // 沉浸式阅读
				htmlcode: true, // 展示html源码
				help: true, // 帮助
				/* 1.3.5 */
				undo: true, // 上一步
				redo: true, // 下一步
				trash: true, // 清空
				save: true, // 保存（触发events中的save事件）
				/* 1.4.2 */
				navigation: true, // 导航目录
				/* 2.1.8 */
				alignleft: true, // 左对齐
				aligncenter: true, // 居中
				alignright: true, // 右对齐
				/* 2.2.1 */
				subfield: true, // 单双栏模式
				preview: true, // 预览
			},
        	}
		},
		watch:{
			//监听弹框框改变,   watch和props 名字保持一致
			"$store.state.modalCity"(oldVal, newVal){
				// console.log('refId2',oldVal, newVal, this.$store.state.modalCity)
				if(this.$store.state.modalCity){
					this.$refs['cityList'].show()

					// this.$store.commit('setModalCity', false)
				}else{
					this.$refs['cityList'].hide()

					// this.$store.commit('setModalCity', false)
				}
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

