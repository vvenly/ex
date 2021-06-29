function defaultEquals(a,b){
    return a===b
}

class Node {
    constructor(element){
        this.element = element
        this.next = undefined
    }
}

class LinkedList {
    
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
    }
    push(element) {     //给链表尾部增加元素
    const node = new Node(element);
    let current;
    if (this.head == null) {
        // catches null && undefined
        this.head = node;
    } else {
        current = this.head;
        while (current.next != null) {
        current = current.next;
        }
        current.next = node;
    }
    this.count++;
    }

    getElementAt(index) {   //返回链表中特定位置的元素，如果不存在返回undefined
    if (index >= 0 && index <= this.count) {
        let node = this.head;
        for (let i = 0; i < index && node != null; i++) {
        node = node.next;
        }
        return node;
    }
    return undefined;
    }

    insert(element, index) {    // 项链表中特定位置插入一个新元素
    if (index >= 0 && index <= this.count) {
        const node = new Node(element);
        if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
        } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
        }
        this.count++;
        return true;
    }
        return false;
    }

    removeAt(index) {   //从链表中特定的位置移除一个元素
    if (index >= 0 && index < this.count) {
        let current = this.head;
        if (index === 0) {
        this.head = current.next;
        } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        }
        this.count--;
        return current.element;
    }
    return undefined;
    }

    remove(element) {   //移除链表中一个元素
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {  //返回要查找元素在链表中的索引，没有返回-1
        let current = this.head;
        for (let i = 0; i < this.size() && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
            return i;
            }
            current = current.next;
        }
        return -1;
    }

    isEmpty() { //如果链表为空返回true 如果链表的长度>0 false
        return this.size() === 0;
    }

    size() {    // 返回链表的长度
        return this.count;
    }

    getHead() {
        return this.head;
    }

    clear() {
        this.head = undefined;
        this.count = 0;
    }

    toString() {
        if (this.head == null) { return ''; }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    
}








// 单词翻译：
// equals 相等、平等、对手