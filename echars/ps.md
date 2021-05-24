引用：  
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

 重绘时如遇缓存， 两种解决方案：
// 1、 this.$chart.setOption(option, true)         不加true  默认是有缓存的
// 2、  this.$chart.clear()    手动清除数据

resize事件：

1、可一次性注册多个
mounted(){
 window.onresize = () => { 
    this.myChart.resize();  
    this.myChart2.resize();  
    this.myChart3.resize();
 });
}

2、或者在方法中单独使用
myLogLine.setOption(option);
window.addEventListener("resize", () => { myLogLine.resize();});


