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

    //并集
    union(otherSet){
        const uSet = new Set()
        this.values().forEach(value => uSet.add(value))
        otherSet.values().forEach(value =>uSet.add(value))
        return uSet
    }
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

