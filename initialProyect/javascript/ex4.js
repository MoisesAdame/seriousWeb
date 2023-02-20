// Author: Moisés Adame-Aguilar
// Date: December 23, 2022
// Descrption: Objects and data structures (LinkedList)

// Node class for every elemennt in the LinkedList
function Node(data, next){
    // -- Atributes
    this.data = data
    this.next = next

    // -- Methods
    Node.prototype.print = function(){
        console.log(this.data)
    }
}

// LinkedList class made up of many interlocked instances of Node
function LinkedList(){
    // -- Atributes
    this.head = null
    this.size = 0

    // -- Methods
    // Method that appends a value to the LinkedList's head.
    LinkedList.prototype.addFirst = function(data){
        if(this.head == null){
            this.head = new Node(data, null)
        }else{
            this.head = new Node(data, this.head)
        }
        this.size += 1
    }

    // Method that appends a value to the LinkedList's tail.
    LinkedList.prototype.addLast = function(data){
        if(this.head == null){
            this.head = new Node(data, null)
        }else{
            var temp = this.head
            while(temp.next != null){
                temp = temp.next
            }

            temp.next = new Node(data, null)
        }
        this.size += 1
    }

    // Method that inserts a given value in a given position.
    LinkedList.prototype.insert = function(index, data){
        if(index == 0){
            this.addFirst(data)
        }else if(index == this.size){
            this.addLast(data)
        }else{
            var temp = this.head
            for(var i = 0; i < index - 1; i++){
                temp = temp.next
            }

            temp.next = new Node(data, temp.next)

            this.size += 1
        }
    }

    // Method that removes the first element in the LinkedList.
    LinkedList.prototype.removeFirst = function(){
        var temp = this.head

        this.head = this.head.next

        this.size -= 1
    }

    // Method that reverses the LinkedList.
    LinkedList.prototype.reverse = function(){
        var temp = this.head
        for(var i = 0; i < this.size; i++){
            this.addLast(temp.data)

            temp = temp.next

            this.removeFirst()
        }
    }

    // Method that prints every LinkedList element.
    LinkedList.prototype.print = function(){
        var temp = this.head
        while(temp != null){
            temp.print()

            temp = temp.next
        }
    }
}