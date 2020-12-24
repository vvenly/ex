<template>
  <div>

    <h3>拖拽DIV</h3>
    <div>
        <div v-drag style="width:200px;height:200px;background:#aff;"></div>
        <vue-drag-resize></vue-drag-resize>
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

  },
  directives: {
        drag: {
            // 指令的定义
            bind: function (el) {
                let odiv = el;   //获取当前元素
                el.onmousedown = (e) => {
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - odiv.offsetLeft;
                    let disY = e.clientY - odiv.offsetTop;
                    let left = '';
                    let top = '';
                    document.onmousemove = (e)=>{
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        left = e.clientX - disX;
                        top = e.clientY - disY;
                        //绑定元素位置到positionX和positionY上面
                        //移动当前元素
                        odiv.style.left = left + 'px';
                        odiv.style.top = top + 'px';
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                };
            }
        }
    }
}


</script>