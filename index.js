
//node constructor
    class ListNode {
        constructor(data) {
            this.data = data
            this.next = null                
        }
    }
//list constructor
    class LinkedList {
        constructor(head = null) {
            this.head = head
        }
    }
//create node 
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2
//create linked list
let list = new LinkedList(node1)

console.log(list.head.data)

console.log(list)