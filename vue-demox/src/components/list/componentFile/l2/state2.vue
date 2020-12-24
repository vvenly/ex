<template>
  <div>

    <h4>从vuex中按需引入 mapState 函数： import { mapState } from 'vuex'</h4>
    <h4>然后通过mapState ，将当前组件需要的全局数据，映射为当前组件的computed计算属性</h4>
    <div>
      count: {{count}}
    
    </div>
  </div>
</template>

<script>


import { mapState } from 'vuex'

export default {
  data () {
      return {
        
      }
    },
  computed: {
    ...mapState(['count'])
  }
}


</script>
<style>
</style>
