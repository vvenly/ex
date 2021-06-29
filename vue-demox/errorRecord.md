1、  Uncaught SyntaxError: Unexpected token '<'   + 
```

//    文件引用错误，检查路径
<!-- We're sorry but vue-cli3 doesn't work properly without JavaScript enabled. Please enable it to continue. -->


```

<hr style="margin:30px 0">

2、 [Vue warn]: Error in render: "TypeError: Cannot read property 'xxx' of undefined"

 （1）主原因是因为渲染的时候当前的值不存在，可以在父元素上 加个v-if 判断一下， 如果不存在下面不进行不继续
 
 （2）如果还报错，检查下所有数据赋值的地方， 可能是某个过程把数据改错了


<hr style="margin:30px 0">


