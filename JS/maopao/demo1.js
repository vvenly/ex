// 创建数组
function sortArray(length){
    const arr = []
    for(let i=length;i>0;i--){
        arr.push(i)
    }
    return arr
}


let a1 = sortArray(6)

console.log(sortArray(6).join())


function swap(arr,a,b){
    // const temp = arr[a];
    // arr[a] = arr[b];
    // arr[b] = temp;

    [arr[a], arr[b]] = [arr[b], arr[a]]
}
// const Compare = { LESS_THAN: -1, BIGGER_THAN: 1, EQUALS: 0 };

function defaultCompare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

// 冒泡排序
function bubbleSort(arr, compareFn = defaultCompare){
    const {length} =  arr

    console.log('length', length, arr)
    for(let i =0; i<length;i++){
        for(let j =0; j<length-1;j++){
            if(compareFn(arr[j], arr[j+1] === 1)){
                swap(arr,j,j+1)
            }
        }
    }
}

console.log(a1)
console.log(bubbleSort(a1))