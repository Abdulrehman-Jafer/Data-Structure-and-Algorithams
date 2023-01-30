console.log("SELECTION SORT")

const ArrayToBeSorted=[5,3,4,2,1,0]


// Time complexity big O(n ^ 2) where as O represent the worst case while omega represent the best case
const selection_Sort = (array) =>{
let arrayCopy = [...array]
let sortedArray=[]
let i = 0
while(i < arrayCopy.length){
    let smallestNumber = array[0]
    for(let j = 0 ; j < array.length ; j++){
     if(array[j] < smallestNumber){
        smallestNumber = array[j]
     }
     else {
        smallestNumber = smallestNumber
     }
    }
    array.splice(array.indexOf(smallestNumber),1)
    sortedArray.push(smallestNumber)
    i = i + 1
}
return sortedArray
}
console.log(selection_Sort(ArrayToBeSorted))