// Author: Moisés Adame-Aguilar
// Date: January 7, 2023
// Descrption: Objects and data structures (Tree)

class Node{
    // Constructor for Nodes of BST
    constructor(data, leftNode, rightNode){
        this.data = data
        this.leftNode = leftNode
        this.rightNode = rightNode
    }
}

class Tree{
    // Constructot for BST
    constructor(){
        this.root = null
    }

    // Binary Search Tree Insertion
    insert(data, node = this.root){
        if(node === null){
            this.root = new Node(data, null, null)
        }else if(data <= node.data && node.leftNode !== null){
            this.insert(data, node.leftNode)
        }else if(data <= node.data){
            node.leftNode = new Node(data, null, null)
        }else if(data > node.data && node.rightNode !== null){
            this.insert(data, node.rightNode)
        }else if(data > node.data){
            node.rightNode = new Node(data, null, null)
        }
    }

    // Max element inside Tree
    max(node = this.root){
        if(node === null){
            return NaN
        }else if(node.rightNode !== null){
            return this.max(node.rightNode)
        }else{
            return node.data
        }
    }

    // Min element inside Tree
    min(node = this.root){
        if(node === null){
            return NaN
        }else if(node.leftNode !== null){
            return this.min(node.leftNode)
        }else{
            return node.data
        }
    }

    // Infix Tree Transversal Print
    inPrint(node = this.root){
        if(node !== null){
            this.inPrint(node.leftNode)
            console.log(node.data)
            this.inPrint(node.rightNode)
        }else{
            console.log('Empty Tree')
        }
    }

    // Prefix Tree Transversal Print
    prePrint(node = this.root){
        if(node !== null){
            console.log(node.data)
            this.prePrint(node.leftNode)
            this.prePrint(node.rightNode)
        }else{
            console.log('Empty Tree')
        }
    }

    // Postfix Tree Transversal Print
    postPrint(node = this.root){
        if(node !== null){
            this.postPrint(node.leftNode)
            this.postPrint(node.rightNode)
            console.log(node.data)
        }else{
            console.log('Empty Tree')
        }
    }
}