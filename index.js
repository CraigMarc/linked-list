


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

          at(index) {
            let tmp = this.head;
            for (let i = 0; i < index; i++) {
              tmp = tmp.next;
              if (tmp == null) return "There is no item for this index";
            }
            return tmp;
          }

          pop() {
            let cur = this.head;
            let prev = null;
            while (cur.next != null) {
              prev = cur;
              cur = cur.next;
            }
            prev.next = null;
          }

          contains(value) {
            let tmp = this.head;
            while (tmp != null) {
              if (tmp.data === value) return true;
              tmp = tmp.next;
            }
            return false;
          }

          find(value) {
            let tmp = this.head;
            let index = 0;
            while (tmp != null) {
              if (tmp.data === value) return index;
              tmp = tmp.next;
              index++;
            }
            return null;
          }


          toString() {
            let tmp = this.head;
            let stringList = "";
            while (tmp != null) {
              stringList += `(${tmp.data}) -> `;
              tmp = tmp.next;
            }
            return (stringList += "null");
          }

          insertAt(value, index) {
            if (this.head == null) this.prepend(value);
            else {
              let cur = this.head;
              let prev = null;
              for (let i = 0; i < index; i++) {
                prev = cur;
                cur = cur.next;
                if (cur == null) break; // if index is bigger than end of list, add node at end of list
              }
              const tmp = new ListNode(value);
              prev.next = tmp;
              tmp.next = cur;
            }
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

console.log(list.at(5))

console.log(list.contains(2))

console.log(list.find(5))

console.log(list.toString())

list.insertAt(1500, 1)
console.log(list)