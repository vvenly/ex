export function defaultEquals(a,b){
    return a===b
}

export class Node{
    constructor(ele){
        this.element = ele
        this.next = undefined
    }
}