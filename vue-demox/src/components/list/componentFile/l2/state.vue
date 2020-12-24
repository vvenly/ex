<template>
  <div>

    <h5>State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State中进行储存</h5>
    <div>
      创建store数据源，提供唯一的公共数据 <br><br>
      <textarea name="" id="" cols="30" rows="10">const store = new Vuex.Store({
        state : {
          key : value
        }
      })
    </textarea> <br><br>
      详见文件： vue-demox\src\store\index.js

    </div>

    <div>
      <h5>组件访问state方式</h5>
      <ul>
        <li>
          <div>
            <p>1、 this.$store.state.数据名称</p>
            <p> count:  {{$store.state.count}}</p>
          </div>
        </li>
        <li>
          <div>
            <p>2、 mapState 辅助函数</p>
            <p> <state2 />  </p>
          </div>
        </li>
      </ul>
    
    </div>
  </div>
</template>

<script>



import state2 from "@/components/list/componentFile/l2/state2.vue"

export default {
  components: { state2 },
    data () {
      return {
        
      }
    }
}


</script>
<style>
</style>
