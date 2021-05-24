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
      toToast() {
        this.$toast({
          message:'我是需要提示的文字',
          position:'top'
        });
      },
 
      // 加载转圈提示
      toLoading() {
        this.$toast.loading({
          mask: true,
          message: '加载中...'
        });
      },
 
      // 成功提示
      toSuccessTip() {
        this.$toast.success({
          message:'成功的提示文案',
        })
      },
 
      // 失败提示
      toFailTip() {
        this.$toast.fail({
          message:'失败的提示文案'
        })
      },
 
      //   自定义图标
      this.$toast({
          icon: 'star-o', // 找到自己需要的图标
          message: '我是提示文字'
        })
 
      //自定义图片提示
      this.$toast({
          icon:'https://www.baidu.com/favicon.ico',
          message:'我是提示文字'
        })



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

