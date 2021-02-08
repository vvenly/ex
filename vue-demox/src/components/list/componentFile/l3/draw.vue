<template>
  <div>

    <h3>拖拽DIV</h3>
    <div style="position:relative">
        <div v-drag style="width:200px;height:200px;background:#aff;"></div>
        <vue-drag-resize style="background: #faf;">
            <div style="width:80%;height:80%;background:#aff;"></div>
        </vue-drag-resize>
    </div>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize';
export default {
    components: {
          VueDragResize
      },
  data () {
      return {
        
      }
  },
  methods:{

  }
}


</script>