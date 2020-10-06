<template>
  <div style="position: relative;">
		<vlTopMenu></vlTopMenu>
		<div class='bodyMain'>

				 <div class="leftMenu">
        <ul>
              <li v-for="v in data" :key="v.id">
                  <a href="" @click.prevent="event1(v.url)"> {{ v.name }} </a>
              </li>
            </ul>
    </div>

	  <div class="rightMenu">
	      <div style="background:#8E6BB1;height: 300px;color:#fff;padding:20px;">

	       输出显示：  <br/>  <br/>

	        {{s1}}   <br/>  <br/>

	        {{ o1 }}   <br/>  <br/>

	        {{f1}}      
	      
	      </div>

	  </div>
	</div>
   


  </div>
</template>

<script>
import data from '@/data/data.json'   //引入json文件

import { str , obj, fn1 } from "@/assets/js/m2"    //引入m2.js
import vlTopMenu from "@/components/list/componentFile/topMenu.vue"
export default {
    components: { vlTopMenu},
    data () {
      return {
        data: data.menuList[1].children,
        s1:str,
        o1:obj,
        f1:fn1(3)
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