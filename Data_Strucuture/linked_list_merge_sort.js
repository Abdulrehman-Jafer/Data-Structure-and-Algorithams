import {NodeList} from "./Data_Structure.js"


// someFunc(value,Obj) When an value is passed to a function it is passed as a copy of the value while when an object is passed it is passed as a refrence not the copy of the value
// it means we can change the reference directly like i am doing in compare and Merge function and changing the reference directly because when I am initializing that current node is 
// equal to headNode it is just becoming a new reference to the headNode so any change into current node is the direct change to the headNode because both pointing to the same reference
// in the memory.

let myNodeList = new NodeList()
myNodeList = myNodeList.append(5)
myNodeList = myNodeList.append(4)
myNodeList = myNodeList.append(3)
myNodeList = myNodeList.append(2)
myNodeList = myNodeList.append(1)
myNodeList = myNodeList.append(1)


//Takes O(k logn) k is number of times we find mid_Node it should be O(log n)
const linkListSplit=(nodeList)=>{
// if Node List is null or head Node is Null then Unable to divide then putting the node List to the left side and adding null to the right side
if(nodeList === null || nodeList.headNode === null){
    let left_Part = nodeList
    let right_Part= null
    return {left_Part,right_Part}
}
else{
    // If nodeList can be diivide then finding midPoint
    let mid = Math.floor(nodeList.size()/2)
    // Found mid_Node to attach with new node List
    let mid_Node=nodeList.node_at_index(mid - 1)
    // Left Part will have Node List
    let left_Part = nodeList
    // Right part will be a new a Node List 
    let right_Part= new NodeList()
    // Setting right part head Node equal to next_Node of mid_Node
    right_Part.headNode=mid_Node.next_Node
    // Remove the conncetion of midNode with its next_Node
    mid_Node.next_Node = null
    // Returning Left and Right Part
    return {left_Part,right_Part}
}
}
//Takes big O(n) merging time will increase with the increase in number of nodes
const comapreAndMerge=(left_NodeList,right_NodeList)=>{
// Created a new Sorted List 
let sortedLinkList = new NodeList()
// Added a Fake Head which will be removed so that no panga for deciding headNodes
sortedLinkList.append(0)
// Created reference of headNode
let current_Node = sortedLinkList.headNode
// Reference of left_Node_List
let left_head = left_NodeList.headNode
// Reference of right_Node_List
let right_head=right_NodeList.headNode
// Created a loop until both left_head and right_head is null
while(left_head || right_head){
    if(left_head == null){
    // If Left Head is null set right_head as the next Node of NodeList without comparing thinking that list is already sorted from left to tight and
    // Only greater ones are in the right_Node List remains
        current_Node.next_Node = right_head
        right_head = right_head.next_Node
    }
    else if(right_head == null){
    //  Same If Right Head is Null
        current_Node.next_Node = left_head
        left_head = left_head.next_Node
    }
    else{
     // If Both left and right head are not null then we can compare their data   
      let  left_head_data = left_head.data
      let  right_head_data= right_head.data
      if(left_head_data < right_head_data){
        // If left data is smaller then add left head as a next Node
        current_Node.next_Node = left_head
        left_head = left_head.next_Node
      }
      else {
        // same if right data is smaller
        current_Node.next_Node = right_head
        right_head = right_head.next_Node
      }
    }
    // IF NO CONDITION MATCHES
    current_Node = current_Node.next_Node
}
// Removing the fake head
let head = sortedLinkList.headNode.next_Node
// Changin refernece ti new head
sortedLinkList.headNode = head
return sortedLinkList
}
// Total time complexity would be O(kn log n) but it should be O(n logn) => Quasi-Linear time
const merge_Sort = (nodeList) =>{
if(nodeList.size() == 1){
    // If Size is one so stop recursiveness
    return nodeList
}
else if(nodeList.headNode == null){
    // If headNode is nulll then stop
    return nodeList
}
// Splitting the Link List
let {left_Part,right_Part} = linkListSplit(nodeList)
//  Doing splitting and merging on the left Side
let left_NodeList = merge_Sort(left_Part)
// Doing splitting and merging on the right Side
let right_NodeList = merge_Sort(right_Part)
// Final comparing and merging the sorted Left and right NodeLists
return comapreAndMerge(left_NodeList,right_NodeList)
}
console.log(myNodeList)