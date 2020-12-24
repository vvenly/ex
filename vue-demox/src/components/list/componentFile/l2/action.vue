<template>
  <div>

    <h3>actions 是用来处理异步操作的；</h3>
    <h4>在actions中不能直接修改state的数据，需要修改的时候，必须通过调用commit触发对应的mutations才可以 <br>
        触发actions 的第一种方式： this.$store.dispatch('')</h4>
   
    <div>
      count: {{count}}

      <div>
        <button @click="handleAc1">ac1: 加1</button>


        <button @click="handleAc2">ac2:  加30</button>

        <br>

        <button @click="subAsync">ac1: 减1</button>


        <button @click="subNumAsync(10)">ac2:  减10</button>
      </div>
    
    </div>
  </div>
</template>

<script>


import { mapState } from 'vuex'

import {mapActions} from 'vuex'

export default {
  data () {
      return {
        
      }
  },
  computed: {
    ...mapState(['count'])
  },
  methods:{
    //actions 第一种调用方式 this.$store.dispatch
    handleAc1(){
        //dispatch : 专门用来触发 store里面的actions
        this.$store.dispatch('addAsync')
    },
    handleAc2(){
      this.$store.dispatch('addNumAsync',30)
    },
    //actions 第二种调用方式 mapActions
    ...mapActions(['subAsync','subNumAsync'])
  }
}


</script>