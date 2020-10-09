//写法一
// export let a = 10;
// export let b = 'abc';
// export let c = {name:'lucy'}

// export class Cat{
// 	constructor(name) {
// 	    this.name = name;
// 		console.log(11111)
// 	}
// }

//写法二
let a = 10;
let b = 'aaa';
let c = {name:'lucy'}
let d = "I'm ddddd ";

class Cat{constructor(name) {this.name = name;}}


//可以使用as关键字重命名
// export {a,b,c,Cat, d as e}

//以上几种写法，在使用import引用时，必须知道所要加载的变量名或函数名，否则无法使用；
//为了方便，可以使用export default命令，为模块指定默认输出
//export default只能使用一次，所以建议一次性把文件内所有的都写上
export default {a,b,c,Cat, d}