报错处理
1、如有报错 xx.prototype is read only, 是因为这是因为esLint对原生原型链进行了变异
在代码上面添加以下内容即可
```
// eslint-disable-next-line no-extend-native
```



/* eslint-disable */


