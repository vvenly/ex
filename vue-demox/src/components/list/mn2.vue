<template>
  <div style="position: relative;">
		<vlTopMenu></vlTopMenu>
		<div class='bodyMain'>

				 <div class="leftMenu">
            <ul>
              <li v-for="v in menuList" :key="v.id" @click="view = v.url">
                <span class="fa" :class="[v.icon]"></span>
                {{v.name}}
              </li>
            </ul>
          </div>

	  <div class="rightMenu">
      <div>
        <transition name="component-fade" mode="out-in">

          <component v-bind:is="view"></component>

        </transition>

      </div>
	      

	  </div>
	</div>



  </div>
</template>

<script>
import datas from '@/data/data.json'   //引入json文件

import { str , obj, fn1 } from "@/assets/js/m2"    //引入m2.js
import vlTopMenu from "@/components/list/componentFile/topMenu.vue"
import vux from "@/components/list/componentFile/l2/vueX.vue"
import state from "@/components/list/componentFile/l2/state.vue"
import mutation from "@/components/list/componentFile/l2/mutation.vue"
import action from "@/components/list/componentFile/l2/action.vue"
import getter from "@/components/list/componentFile/l2/getter.vue"
import dataYinRu from "@/components/list/componentFile/l2/dataYinRu.vue"
export default {
    components: { vlTopMenu,vux,state,mutation,action, getter,dataYinRu},
    data () {
      return {
        data: datas.menuList[1].children,
        s1:str,
        o1:obj,
        f1:fn1(3),
        view:'vux',
        menuList: [
            {"id":1, "name":"vueX", "url":"vux","icon":""},
            {"id":2, "name":"state", "url":"state","icon":""},
            {"id":3, "name":"mutation", "url":"mutation","icon":""},
            {"id":4, "name":"action", "url":"action","icon":""},
            {"id":5, "name":"getter", "url":"getter","icon":""},
            {"id":8, "name":"数据引入", "url":"dataYinRu","icon":""},
        ]
      }
    },
    show:1,
    methods:{
      event1(url){
        this.$router.push(url);
      }
    }
}



</script>
