
// 1、 splice() 方法用于添加或删除数组中的元素。   注意：这种方法会改变原始数组。
// 语法：  array.splice(index,howmany,item1,.....,itemX)

// index	必需。规定从何处添加/删除元素。
// 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
// howmany	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。
// 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
// item1, ..., itemX	可选。要添加到数组的新元素

// let arr1 = [1,2,3,4,5]


// //删除起始下标为2，长度为1的一个值(len设置1，如果为0，则数组不变)
// let arr2 = arr1.splice(2,1)
// console.log(arr1, arr2)


// let arrS1 = [60.2, 66.4, 65.3, 39.1, 33.8, 27.9, 32.4, 34.4, 34.5, 50.5, 27.9, 11,12,13,24,34,64,75]
// let strArr = new Array(24 - 6 ).fill(1)
// console.log('fill2:', strArr.toString())
// console.log(arrS1.splice(6))        // 返回的是被删除的数组
// console.log(arrS1.splice(6, 0))         // 第二个参数为0 或 null, 会返回空数组
// console.log([1,2,3,4,5].splice(0, 3))   // 输出被删除的元素，一般用于面包屑等功能


let arr1 = [
    {name:'lucy', id:1},{name:'aaa', id:2},
    {name:'bbb', id:3},{name:'ccc', id:4},
    {name:'eee', id:5},{name:'fff', id:6},{name:'ggg', id:7},{name:'hhh', id:8}]

let arr2 = [{name:'ccc', id:4},{name:'lucy', id:1},{name:'ggg', id:7},{name:'hhh', id:8}]


// 删除第一个数组中 包含 第二个数组的元素
// arr1.forEach((v, i)=>{ 
//     arr2.forEach(j=>{
//         if(v.id == j.id){
//             arr1.splice(i,1)  // 错误示例， 不要增改正在使用的数据，会引发其他错误，数据多的时候筛选错误
//         }
//     })
// })



let arr3 = []   // 筛除arr1  arr2  id 相同的数据
let arr4 = arr2.map(v=>v.id)
arr3 = arr1.filter((item) => !arr4.includes(item.id))
// console.log(arr3)


// 查一维数组
let str55 = ['a','b','dc','k','x','z'];
console.log('includes1: ', str55.includes('c')) // 存在返回true 否则返回false

// 查二维数组时, 不能直接对比对象查 需要先把二位数组转为一维数组
let str66 = [
    {name:'abc',id:1},{name:'xx',id:2},{name:'cc',id:3},
];

let str77 = str66.map(v=>v.name)
console.log('includes2: ', str77.includes('abc'))