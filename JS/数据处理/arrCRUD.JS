
// 1、 splice() 方法用于添加或删除数组中的元素。   注意：这种方法会改变原始数组。
// 语法：  array.splice(index,howmany,item1,.....,itemX)

// index	必需。规定从何处添加/删除元素。
// 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
// howmany	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。
// 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
// item1, ..., itemX	可选。要添加到数组的新元素

let arr1 = [1,2,3,4,5]


//删除起始下标为2，长度为1的一个值(len设置1，如果为0，则数组不变)
let arr2 = arr1.splice(2,1)
console.log(arr1, arr2)


let arrS1 = [60.2, 66.4, 65.3, 39.1, 33.8, 27.9, 32.4, 34.4, 34.5, 50.5, 27.9, 11,12,13,24,34,64,75]
let strArr = new Array(24 - 6 ).fill(1)
console.log('fill2:', strArr.toString())
console.log(arrS1.splice(6))        // 返回的是被删除的数组
console.log(arrS1.splice(6, 0))         // 第二个参数为0 或 null, 会返回空数组
console.log([1,2,3,4,5].splice(0, 3))   // 输出被删除的元素，一般用于面包屑等功能