<template>
  <div>

    <div>
      <h3>需要注意下， vuex中非常不推荐组件直接修改$store.state，如果项目较大，不利于后期的检查和维护， <br>
          需要修改store的数据，可以采用 mutation 这种方式，虽然操作较为繁琐一些，但是可以集中监控所有数据的变化。</h3>
          <h4>组件中通过this.$store.commit可以调用mutations中的函数</h4>
    </div>

    <h4>从vuex中按需引入 mapState 函数： import { mapState } from 'vuex'</h4>
    <h4>然后通过mapState ，将当前组件需要的全局数据，映射为当前组件的computed计算属性</h4>
    <div>
      count: {{$store.state.count}}
    </div>

    <ul>
      <li>
          <button @click="handleAdd"> 全局state ++</button> 
        
          <button @click="handleAddNum"> 全局state +10</button>
        
          <button @click="handleSub"> 全局state --</button>
        
          <button @click="handleSubNum"> 全局state -20</button>
        </li>
    </ul>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  data () {
      return {
        
      }
    },
    methods:{
      //mutation 第一种调用：  this.$store.commit(key)
      handleAdd(){
        this.$store.commit('add')
      },
      handleAddNum(){
        this.$store.commit('addN', 10) 
      },
      //mutation 第二种调用:  通过import 引用 mapMutations  一次性将需要引用的函数映射到全局上，通过this直接调用
      ...mapMutations(['subtract','subtractNum']),
      handleSub(){
        this.subtract()
      },
      handleSubNum(){
        this.subtractNum(20)
      }
    }
}


</script>
<style>
</style>
