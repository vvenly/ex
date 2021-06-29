 如果没有什么特殊要求需要安卓或ios源码的，可以通过Hbuilder 打包；
1、文件-新建项目 - 选择5+App  (默认模板即可)

2、不用复制任何文件，只需要操作项目中的manifest.json文件即可，
    配置下基础配置，关键是 “应用入口页面”，填入h5的首页地址就行，
    还有一些权限配置根据不同的项目看需求， 以及app图标等，
    配置完成后点菜单栏   发行 - 原生App-云打包   即可完成

    PS: 因为打包手机app 需要有证书，自有的话可直接使用，没有的话Hbuilder 有公共的测试证书可以使用，

3、一般都要取消通讯录权限
<p><img src="img/h5-1.jpg" alt=""> </p>
   


<a href="https://ask.dcloud.net.cn/m/article/36982">权限配置参考：</a>
https://ask.dcloud.net.cn/m/article/36982



4、打包为app 后点击手机返回关闭程序处理：
注意一定要加到需要被打包的主页面index.html里，或者main.js 里
而不是打包的文件里
 
<a href="http://www.html5plus.org/doc/zh_cn/events.html">相关文档 - HTML5中国产业联盟</a>
http://www.html5plus.org/doc/zh_cn/events.html
Events模块管理客户端事件，包括系统事件，如扩展API加载完毕、程序前后台切换等。

http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject
WebviewObject 相关文档，（基本都操作这个即可）

```
<script>
    document.addEventListener('plusready', function () {
			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。")
		  var webview = plus.webview.currentWebview()
		  plus.key.addEventListener('backbutton', function () {
		    webview.canBack(function (e) {
		      if (e.canBack) {
		        webview.back()
		      } else {
		        // webview.close() //hide,quit
		        // plus.runtime.quit()
		        // 首页返回键处理
		        // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
		        var first = null
		        plus.key.addEventListener( 'backbutton',
		          function backQuit() {
		            // 首次按键，提示‘再按一次退出应用’
		            if (!first) {
		              first = new Date().getTime()
                  // 提示暂时有问题，但不影响使用
                  // 可以考虑试试在首页设置个变量判断下，或者通过app.vue 里判断路由，
		              console.log('再按一次退出应用') 
		              setTimeout(function () {
		                first = null

                    // 要清除addEventListener 添加的事件，不能用匿名函数，不然每次到首页点一次都会重复添加关闭事件
                    plus.key.removeEventListener('backbutton',backQuit)
		              }, 1000)
		            } else {
		              if (new Date().getTime() - first < 1500) {
		                plus.runtime.quit()
		              }
		            }
		          },
		          false
		        )
		      }
		    })
		  })
		})
  </script>
```

<hr style="margin:20px 0" />

html5 plus  其他

history			// 历史

plus.webview.currentWebview().getURL()		// 获取地址

plus.storage部分

plus.storage.setItem(key,value);
注意事项: key 和 value 都只能是**字符串**,如果是数字的话,存进去,取不出来
plus.storage.setItem("key" ,String(value)); value 最好用String强转一下,以防万一

<hr style="margin:20px 0" />

关于安卓、IOS平台手机返回键 兼容问题，
```
//  1、 在index.html  中 加入如下代码 

//	这段加在head中， 因为下面是个自执行的匿名函数
<script>
	window.sysType = ''
</script>

//  判断不同平台不同操作
<script>
    (function(){
      var u = navigator.userAgent;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      if(isiOS){
        sysType = "IOS"
      }else if(isAndroid){
        sysType = "Android"
      }
   })()

  //  alert(sysType)

    window.webview = null
    document.addEventListener('plusready', function () {
       window.webview = plus.webview.currentWebview()
       plus.key.addEventListener('backbutton', function () {
      
         webview.canBack(function (e) {
          if (e.canBack){
            webview.back()
          }else{
            var first = null
             plus.key.addEventListener(
               'backbutton',
               function () {
                 // 首次按键，提示‘再按一次退出应用’
                 if (!first) {
                   first = new Date().getTime()
                  //  alert('双击退出应用') // 此处可以用自定义提示
                   setTimeout(function () { first = null }, 1000)
                 } else {
                   if (new Date().getTime() - first < 1500) { plus.runtime.quit() }
                 }
               },
               false
             )
          }
         })
       })
     })
   </script>

```

2、在main.js 中加入router 判断，最后在每个页面的返回事件中调取vlBack 事件即可
```

Vue.prototype.vlBack = (v) => {
  if (window.sysType == 'Android') {
    // Android 调取手机返回键功能
    window.webview.back()
  } else {
    // ios 走路由， router.go(n)====window.history.go
    router.go(-1)
  }
}

```
