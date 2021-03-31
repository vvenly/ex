var str="张三四五";

// 只显示姓氏
function familyName(v){
    let val = v.split('')
    // console.log(val, val.length)
    let a = ''
    val.forEach((x,i)=> {
        if(i<val.length-1){ a += '*' }
    })

    return val[0] + a
}

console.log(familyName(str))
// console.log(str.substring(0,4));        //2018