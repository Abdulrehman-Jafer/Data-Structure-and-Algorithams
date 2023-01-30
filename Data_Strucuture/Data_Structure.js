// Javascript uses OOP that is Object Oriented Programming via class keyword

// Building a data structure with nodes

// An advantage of Linked Lists

/*Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
This is one advantage it has over arrays. while in array index of each item is changed here we jus change the
address of the next node in previous node */

// Disadvantages of Linked Lists
/*
1.Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed.
  Because nodes are accessed sequentially starting from the first node.
2.It uses more memory than arrays because of the storage of the pointers. */

class Node {
  // In this contructor we will provide only one value and next will be assigned as null
  // then we assigned the pointer of next node to null
  constructor(data) {
    (this.data = data), (this.next_Node = null);
  }
}

export class NodeList {
  // This will take only headNode if the headNode is not provided then the default value
  // WIll be assigned that is null
  constructor(headNode = null) {
    this.headNode = headNode;
  }
  size() {
    // Take Linear time O(n) with respect to number of nodes
    let count = 0;
    let currentNode = this.headNode;
    if (currentNode) {
      while (currentNode !== null) {
        count += 1;
        currentNode = currentNode.next_Node;
      }
      return count;
    }
  }
  clear() {
    this.headNode = null;
    //   Take Constant time O(1)
  }
  getLast() {
    // Alse Take Linear Time big O of n that O(n) => have to check every node
    let currentNode = this.headNode;
    if (currentNode) {
      while (currentNode.next_Node !== null) {
        currentNode = currentNode.next_Node;
      }
      return currentNode;
    }
  }
  getFirst() {
    //Also take constant Time that is O(1)
    return this.headNode;
  }
  checkIsEmpty() {
    // Same it will take constant time that is O(1)
    if (this.headNode == null) {
      return "List Node Is Empty";
    }
    return this.headNode;
  }
  prepend(provided_Data) {
  let new_Node = new Node(provided_Data)
  if(this.headNode === null){
    return this.headNode = new NodeList(new_Node)
  }
  else{
    new_Node.next_Node = this.headNode
    return new NodeList(new_Node)
  }
  }
  append(provided_Data) {
    let new_Node = new Node(provided_Data)
    let current_Node = this.headNode
   if(this.headNode === null){
   return this.prepend(provided_Data)
   }
   else{
     while(current_Node.next_Node !== null){
       current_Node = current_Node.next_Node
      }
      if(current_Node.next_Node === null){
        current_Node.next_Node = new_Node
        return new NodeList(this.headNode)
      }
   }
  }
  search(valueToBeSearch) {
    // This will alse take big O of n O(n)
    let currentNode = this.headNode;
    // keeping track of Current_Node
    while (currentNode) {
      // If Current Node exists then run the code
      if (currentNode.data === valueToBeSearch) {
        // If Values matched then return the node
        return currentNode;
      } else {
        // else Set the current Node equal to the next_Node
        currentNode = currentNode.next_Node;
      }
    }
    // If Nothing is returned from above code then this statement will run
    return "Not Found";
  }
  insert(data, index) {
    // This Will Take Constanct time for inserting or you can say changing reference of a node that is big O of 1 that is O(1)
    //  But Searching For the index will take linear time that is O(n) after adding both the times we will left with big O of n that is O(n)
    let new_Node = new Node(data);
    // Creating newNode from Data
    let currnetIndex = 1;
    // Start Index 1 because 0 will be handled by prepend method
    let currentNode = this.headNode;
    // Setting Current Node
    if (index === 0) {
      return this.prepend(data);
      // If index 0 so use this.prepend() method
    } else if (index > this.size() || index < 0 || isNaN(index)) {
      // These Condition to send Error
      return "Please Provide a Valid Index";
    } else {
      while (currnetIndex !== index) {
        // Keep the loop if current index does not match
        currnetIndex = currnetIndex + 1;
        // Increasing by 1
        currentNode = currentNode.next_Node;
        // Also changing the current Node
      }
      if (currnetIndex === index) {
        // Saving the next_Node of the current into new Variable
        let currentNode_Next = currentNode.next_Node;
        // Changing the Pointer of Current Node or Inserting New_Node Here
        currentNode.next_Node = new_Node;
        // Attaching the old reference of current_Node to the New_Node
        new_Node.next_Node = currentNode_Next;
        // Returning the new NodeList
        return new NodeList(this.headNode);
      }
    }
  }
  deleteAt(index) {
    if (index > this.size() - 1 || index < 0 || isNaN(index)) {
      // Size is 1 digit greater than the total indexes
      return "Error";
      // If any Condition met willl throw a error
    }
    let current_Index = 0;
    // Keeping track of current Index
    let current_Node = this.headNode;
    // Current Node
    let prev_Node = null;
    // For Keeping Track of prev_Node
    if (index === 0) {
      // If Wants to remove the Head_Node
      current_Node = this.headNode.next_Node;
      return new NodeList(current_Node);
    }
    while (current_Index !== index) {
      // Finding the Correct Node Matching the Index
      current_Index += 1;
      // Increaing by 1
      prev_Node = current_Node;
      // Keeping Track of Prev Node
      current_Node = current_Node.next_Node;
      // Setting the Current_Node equal to next_Node
    }
    if (current_Index === index) {
      // Finally when we find the correct node with correct_Index to Delete then
      prev_Node.next_Node = current_Node.next_Node;
      //  Removing the Link of Prev_Node from the Current_Node and Setting the New Reference of the List to the next_Node of the Current Node
      return new NodeList(this.headNode);
    }
  }
  delete(key) {
    // Same it will take linear time big O(n) and takes linear time changing tha refrence is
    // Constant time process O(1) and finding the place for key takes linear time in worst case scenario
    // When the key is at tail so the total time complexity would be O(n) + O(1) so taking the most
    //  Valueable then the time complexity would be big O of n that is O(n)
    if(this.headNode=== null){
      return 'NodeList is Empty'
    }
    let current_Node = this.headNode;
    // Setting current_Node
    let prev_Node = null;
    // Making Prev_NODE
    if (current_Node.data === key) {
      // Checking IF the HeadNode is being deleted
      current_Node = current_Node.next_Node
      return new NodeList(current_Node)
    }
    while (current_Node.next_Node !== null) {
      // Loop until reach the Tail & there is no need to set the current_Node equal to null
      prev_Node = current_Node;
      // Keeping Track Of Prev_Node
      current_Node = current_Node.next_Node;
      // Setting New_Node
      if (current_Node.data === key) {
        // Checking If Current_Node Data Matches
        prev_Node.next_Node = current_Node.next_Node;
        // Removed the current Node By attaching the Prev_Node Directly to the next node of Current_Node
        return new NodeList(this.headNode);
      }
    }
    return -1;
  }
  node_at_index(index) {
    //  -1 becuase we start the index from 0 thats why minusing 1 to get actual available indexes in nodeList
    if (index > this.size() - 1 || isNaN(index) || index < 0) return -1;
    if (index === 0) {
      return this.headNode;
    } else {
      let current_Node = this.headNode;
      let current_Index = 0;
      while (current_Index !== index) {
        current_Node = current_Node.next_Node;
        current_Index += 1;
      }
      return current_Node;
    }
  }
}

let node_1 = new Node(3); //Basically this node will behave as my head Node
let node_2 = new Node(5);
let node_3 = new Node(7);

// console.log(node_1)    // we will see {data:5,next_Node:null} lets make good use of this info
node_1.next_Node = node_2;
node_2.next_Node = node_3;
// I used append insertion and add nodes to the tail also we can use prepend insertion that will
// Be to add the nodes before the heads
//   node_3.next_Node=node_1

//  node_3 will act as my tail or end of my Node List because there is no reference to the next_Node node or it is null
let myNodeList = new NodeList(node_1);

export default myNodeList;
