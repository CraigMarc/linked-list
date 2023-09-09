
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
                //get size of linked list
    
        }
        size() {
            let count = 0; 
            let node = this.head;
            while (node) {
                count++;
                node = node.next
            }
            return count;
        }

        prepend(value) {
            let tmp = null;
            if (this.head != null) tmp = this.head;
            this.head = new ListNode(value);
            this.head.next = tmp;
          }
          
        append(value) {
            if (this.head == null) this.prepend(value);
            else {
              let tmp = this.head;
              while (tmp.next != null) tmp = tmp.next;
              tmp.next = new ListNode(value);
            }
        }
    
        findHead() {
            return this.head;
          }
        
          tail() {
            let tmp = this.head;
            while (tmp.next != null) tmp = tmp.next;
            return tmp;
          }

    }
//create node 
let node1 = new ListNode(2)

let node2 = new ListNode(5)

let node3 = new ListNode(10)
//add second node to first with pointer to second node
node1.next = node2

//pointer to third node
node2.next = node3

//create linked list
let list = new LinkedList(node1)
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