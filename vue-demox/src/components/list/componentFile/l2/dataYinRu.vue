<template>
  <div>
    <div style="background:#8E6BB1;height: 300px;color:#fff;padding:20px;">

	       输出显示：  <br/>  <br/>

	        {{s1}}   <br/>  <br/>

	        {{ o1 }}   <br/>  <br/>

	        {{f1}}

	      </div>

  </div>
</template>

<script>


import datas from '@/data/data.json'   //引入json文件

import { str , obj, fn1 } from "@/assets/js/m2"    //引入m2.js

export default {
    data () {
      return {
        data: datas.menuList[1].children,
        s1:str,
        o1:obj,
        f1:fn1(3)
      }
    },
    show:1,
    methods:{
      
    }
}


</script>
<style>
</style>
