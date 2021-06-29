1、 VueTreeselect 控件显示[unknown]:
treeselect 绑定的值需要与options输出的id相对应，若是空值，请不要给空字符串，0，等，因为会出现unknown，并且当选择了值以后，会出现选中的值后面会拼上unknown。
解决办法就是把v-modle绑定的值设为null，必须是null，不能是‘null’，初始化的时候才不会出现unknown。

<hr style="margin:20px 0" />


2、全局引入vant的提示框
在main.js中引入
import { Toast } from "vant";
Vue.use(Toast); 
在组要的.vue文件中引入
this.$toast('hello')
```
    // 普通文字提示
    this.$toast({ message:'我是需要提示的文字', position:'top' });

    // 加载转圈提示
    this.$toast.loading({ mask: true, message: '加载中...' });

    // 成功提示
    this.$toast.success({ message:'成功的提示文案', })

    // 失败提示
    this.$toast.fail({ message:'失败的提示文案' })

    //   自定义图标
    this.$toast({ icon: 'star-o', // 找到自己需要的图标 message: '我是提示文字' })

    //自定义图片提示
    this.$toast({ icon:'https://www.baidu.com/favicon.ico', message:'我是提示文字' })

```

<hr style="margin:20px 0" />

3、组件加入其他内容， 如果组件自定义属性不够用，用template代码实现

```
<van-field >
    <template #left-icon>
        <span class="iconfont icon-icon-mima" />
    </template>
</van-field>
```
<hr style="margin:20px 0" />

4、 van-cell 单元格表格表展示形式，通过 template 标签处理内容， 标签上可携带其他属性
文档： https://vant-contrib.gitee.io/vant/#/zh-CN/cell
```
<van-cell value="内容" is-link>

    <template #title>
        <span class="custom-title">单元格</span>
        <van-tag type="danger">标签</van-tag>
    </template>
    <template #right-icon>
        <van-icon name="search" class="search-icon" />
    </template>

    <template> <span class="custom-title">设备提交</span> </template>
    <template>
    <span class="custom-title">未穿反光衣</span>
    </template>
    <template>
    <span class="custom-title">待处理</span>
    </template>
    <template>
    <span class="custom-title">2021-04-27 16:37:45</span>
    </template>
</van-cell>
```
<hr style="margin:20px 0" />

5、之前总是碰见上滑或下拉时页面看起来卡住的样式
<p>
  目前解决方法是 给导航栏增加fixed定位后， 下面的元素用margin 值来控制比较好，这里不使用padding
</p>

<hr style="margin:20px 0" />

6、vant-list 有时候不断的加载，大部分原因是父级元素或更高级别的元素样式中有
“ overflow: hidden; ”, 处理方式如下：
1、 （已测）
```
// 在van-list 上加 style
<van-list ref="check" v-model="listLoading" :finished="aFinished" style="height:82vh;overflow: scroll;" @load="getStat">

```
2、 使用 :immediate-check="false"
```

<van-list :immediate-check="false" v-model="loadingTask" :finished="finishedTask" @load="onLoadTask" ></van-list>

```

6.2 van-tabs  切换 vant-list 时，操作过快会造成将上一个tab页面数据渲染至当前页
解决方式：  （还可参考vantImgs中的 van-tabs_list.jpg）
1、在我们封装的axios请求里面， 一般就是request.js
``` 
import axios from 'axios';
import Vue from "vue";
import {Toast} from "vant";
Vue.use(Toast)
const service = axios.create({
    // timeout: 10000,
    headers: {
        'content-type': 'application/json'
    }
})
window._axiosPromiseArr = []   //  重点
service.interceptors.request.use(
    config => {

           //  重点， 取消事件
        config.cancelToken = new axios.CancelToken(cancel => {
            window._axiosPromiseArr.push({ cancel })
        })

        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
);

```

2、 van-tabs 上绑定 before-change 事件
```

<van-tabs v-model="active" :before-change="beforeChange">


beforeChange(index) {
    window._axiosPromiseArr.forEach((ele) => {
    ele.cancel() // 路由跳转之前，清空（终止）上一个页面正在请求的内容
    })
    this.btnClick(index)
    this.active = index
},

```



