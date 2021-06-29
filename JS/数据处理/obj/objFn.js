const obj1 = {a:'aaa',b:'bbb'}

// console.log(Object.keys(obj1))

// console.log()

// hasOwnProperty
class Obj2 {
    constructor (){
        this.name = "自有属性"
    }

    hasName(){
        return Object.prototype.hasOwnProperty.call(this.name);
    }
}

Obj2.prototype.name2 = "prototype属性"
console.dir(Obj2)
console.log(Obj2.hasOwnProperty('name'))        // true
console.log(Obj2.hasOwnProperty('hasName'))     // false hasName属于prototype 中的方法，
console.log(Obj2.name2, Obj2.hasOwnProperty('name2'))   //false  通过prototype 添加的非自有属性