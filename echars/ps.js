// 重绘时如遇缓存， 两种解决方案：
// 1、 this.$chart.setOption(option, true)         不加true  默认是有缓存的
// 2、  this.$chart.clear()    手动清除数据