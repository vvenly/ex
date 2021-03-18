<template>
  <div>
		<!--第三步，引用，完成 -->
		<vlTopMenu />
		<div class='bodyMain'>
			<div class="leftMenu">
        <ul> 
																						<!-- 点击切换当前显示的组件 -->
					<li v-for="v in menuList" :key="v.id" @click="view = v.url">
						<span class="fa" :class="[v.icon]"></span>  
						{{v.name}}
					</li> 
				</ul>
	    </div>

	    <div class="rightMenu">
					
	        <transition name="component-fade" mode="out-in">
				
				<!-- 父组件 -->
	          <component :fData='toData' :is="view" @toSon222='toSon2' @getSon='getSon' ref="parentEl"></component>

	        </transition>

			<div v-if='sonShow'>
				子组件传来的数据： {{sonData}}
			</div>

	    </div>
		</div>

    


  </div>
</template>

<script>

//第一步，引入
import vlTopMenu from "@/components/list/componentFile/topMenu.vue"

import switchCom from "@/components/list/componentFile/l1/switchComponents.vue"
import son1 from "@/components/list/componentFile/l1/son1.vue"

import son2 from "@/components/list/componentFile/l1/son2.vue"

import luyou from "@/components/list/componentFile/l1/router.vue"

import luyou2 from "@/components/list/componentFile/l1/router2.vue"

import routerMode from "@/components/list/componentFile/l1/routerMode.vue"

export default {
		//第二步，注册components
    components: { vlTopMenu,switchCom, son1,son2,luyou,luyou2,routerMode },
			 data () {
        return{
            menuList: [
                {"id":1, "name":"切换组件", "url":"switchCom","icon":""},
                {"id":2, "name":"父组件通信子组件", "url":"son1","icon":""},
				{"id":3, "name":"子组件通信父组件", "url":"son2","icon":""},
				{"id":4, "name":"路由1", "url":"luyou","icon":""},
				{"id":5, "name":"路由2", "url":"luyou2","icon":""},
				{"id":6, "name":"路由模式", "url":"routerMode","icon":""}
            ],
            //默认显示第一个
			view: 'son1',
			toData:'父元素的数据',
			sonData:'',
			sonShow:false
        }
		},
		methods:{
			toSon() {
				return '父元素事件执行成功'
			},
			toSon2(n){
				console.log(2,n)
				// return n + n;
			},
			toSon3(n){
				console.log(3, n)
				// return n + n; 
			},
			//获取子组件的数据： 1，父组件定义一个方法，并在组件标签上绑定该方法；2，在子组件调用这个方法，并传参
			getSon(V){
				this.sonShow = true;
				this.sonData = V
			},

			toSon4(){
				this.$refs.parentEl.getVal1('111')
			}
		}
}


</script>
<style>

</style>

