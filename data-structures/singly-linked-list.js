class Node {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        const node=new Node(val);
        if (!this.head){
            this.head=node;
            this.tail=node;
        }
        else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return null;
        this.length--;
        let removedNode=this.tail;
        let temp=this.head;
        let pre;
        while(temp.next){
            pre=temp;
            temp=temp.next;
        }
        if (!pre){
            this.head=null;
            this.tail=null;
            return removedNode;
        }
        pre.next=null;
        this.tail=pre;
        return removedNode;
    }

    shift(){
        if (!this.head) return;
        const temp=this.head;
        if (this.head===this.tail)
            this.tail=null;
        this.head=this.head.next;
        this.length--;
        return temp.val;
    }

    unshift(val){
        const node=new Node(val);
        node.next=this.head;
        this.head=node;
        if (!this.tail)
            this.tail=this.head;
        this.length++;
        return this;
    }

    get(index){
        if (index<0 || index>=this.length) return null;
        let temp=this.head;
        for (let i=0;i<index;++i){
            temp=temp.next;
        }
        return temp;
    }

    set(index,val) {
        const node=this.get(index);
        if (!node) return false;
        node.val=val;
        return true;
    }

    insert(index,val){
        
    }

}

const list=new SinglyLinkedList();

list.push("Hello");
list.push("Jagadeesh");
list.push("Hi");
list.unshift("first");
console.log(list.insert(3,"java is dead"));

console.log(list);
