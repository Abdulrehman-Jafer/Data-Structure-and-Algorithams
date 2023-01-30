import {quick_Sort} from "./QuickSort.js";


let names=["usama","shani","zuka","shafqat","hasnain","abdullah","saqlain","bilal"]

// O(n logn)
let sorted_Names=quick_Sort(names)

// O(logn)
const binary_Search = (array,target) =>{
   let start = 0;
   let end  = array.length - 1

   while (start <= end){
    let midPoint = Math.floor((start + end) /2)
    if(array[midPoint].toLowerCase() === target.toLowerCase()){
        return midPoint
    }
    else if(target > array[midPoint]){
        start = midPoint + 1 
    }
    else{
        end = midPoint - 1
    }
   }
   return -1
}


console.log(binary_Search(sorted_Names,"BILAL"))
