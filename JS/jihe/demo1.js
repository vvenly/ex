class Set{
    constructor(){
        this.items= {}
    }

    add(element){
        if(!this.has(element)){      //先判断是否存在 ， 如果不存在，便向集合中添加这个元素
            this.items[element] = element
            return true
        }
        return false
    }

    delete(element){
        if(this.has(element)){      //先判断是否存在 ，再删除
            delete this.items[element]
            return true
        }
        return false
    }

    has(element){
        // console.log(element in this.items)
        return element in this.items
        // return Object.prototype.hasOwnProperty.call(this.element,element)
    }

    clear(){this.items= {}}

    size(){
        return Object.keys(this.items).length
    }

    values(){
        return Object.values(this.items)
    }

    //并集   返回包含两个集合中所有元素的新集合
    union(otherSet){
        const uSet = new Set()
        this.values().forEach(value => uSet.add(value))
        otherSet.values().forEach(value =>uSet.add(value))
        return uSet
    }

    //交集  返回包含两个集合中共有元素的集合
    intersection(){
        const intersectionSet = new Set();

        const values = this.values();

        for(let i =0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet
    }


    //差集  返回包含所有存在于 第一个集合 且 不存在于第二个集合的元素 新集合



    //子集  验证一个给定集合是否是另一集合的子集
}

// const set = new Set();
// set.add(1);

// set.add(2);

// console.log(set.values(), set.has(2), set.size())
const set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)

const set2 = new Set()
set2.add(3)
set2.add(4)
set2.add(5)

const unionAB = set1.union(set2)
console.log(unionAB.values())

