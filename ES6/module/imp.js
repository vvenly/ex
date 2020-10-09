//第一种引入方式
// import { a,b,c,Cat } from './exp.js'

// //导入的模块如果是基本数据类型，不能重新赋值
// // a = 20;	//报错 imp.js:3 Uncaught TypeError: Assignment to constant variable.

// console.log(a)

// //导入的模块如果是对象，虽然可以修改，但是强烈不建议这么做，后期也许会带来很多不便；
// //比如查询就很不方便
// c.name = 'tom'
// console.log(c)

// let maomi = new Cat('dada')
//console.log(maomi)


//第二种引入方式 一次性导入文件里的全部内容
// import * as exp from './exp.js'

// console.log(exp.a)
// console.log(exp.Cat)

// console.log(exp.d)	//因为d在导出时已经被重新命名的，所以这里是undefined
// console.log(exp.e)

//第三种引入方式， 配合export default ， import后面的名字可以自定义
import mine from './exp.js'
console.log(mine.a)
console.log(mine.Cat)