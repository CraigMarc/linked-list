//node factory
const nodeFactory = (data) => {

   let next = null

   
    return { data, next };
  };



//node constructor
/*
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
*/
//list constructor

const listFactory = (head = null) => {

   function size() {
        let count = 0; 
        let node = head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

   function prepend(value) {
        let tmp = null;
        if (this.head != null) tmp = this.head;
        this.head = nodeFactory(value);
        this.head.next = tmp;
      }
      
    function append(value) {
        if (this.head == null) this.prepend(value);
        else {
          let tmp = this.head;
          while (tmp.next != null) tmp = tmp.next;
          tmp.next = nodeFactory(value);
        }
    }

   function findHead() {
        return this.head;
      }
    
     function tail() {
        let tmp = this.head;
        while (tmp.next != null) tmp = tmp.next;
        return tmp;
      }
    
 
    
     return { head, size, tail, findHead, append, prepend };
   };


//create node 
let node1 = nodeFactory(2)

let node2 = nodeFactory(5)

let node3 = nodeFactory(10)
//add second node to first with pointer to second node
node1.next = node2

//pointer to third node
node2.next = node3

//create linked list
let list = listFactory(node1)
//get first data
console.log(list.head.data)
//get second data
console.log(list.head.next.data)
// linked list structure
console.log(list)

list.prepend(100)




list.append(10000)
console.log(list)

console.log(list.size())
console.log(list.tail())
