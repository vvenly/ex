<template>
  <div>

    <h4>getters 不会修改state，会对store中的数据进行加工，返回成新的数据</h4>
    <h4>store 中的数据发生变化，getters会同步跟着变化</h4>
    <div>
      最初的count: {{$store.state.count}}
    
    </div>


    <h4>使用getters:</h4>
    <ul>
      <li>1、this.$store.getters.属性名：   {{$store.getters.showNum}}</li>

      <li>2、使用import 引入 mapGetters函数, 在computed中调用，然后在组件中直接使用   {{showNum}} </li>

      <li>{{$store.getters.showArr(1)}} </li>

      <!-- <li> {{showArr(1)}}</li> -->
    </ul>
    
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
      return {
        
      }
    },
  computed: {
    ...mapGetters(['showNum','showArr'])
  }
}


</script>
<style>
</style>
