// Time Complexity of O(n logn) n times log n that is number of time we have have to split the arrray for the best case if you pick the pivot in the half
//  but in worst case it will be big O(n ^ 2) That is if it always select the extreme pivot like all the values are lesser or all the values are greater
//  in every depth but its less likely to happen For Exmaple we have list in descending order like 4,3,2,1 always picking the first as pivot then it will 
//  go like 3,2,1 2,1 => 1,2 => 1,2,3 => 1,2,3,4

// O(n logn) Best case when you pick pivot in center then the number of divides would be log n but worst case you happen to pick always the worst pivot that is most greater or most smaller
// That is the worst case run time would be O(n ^ 2) when the list is in descending order and we always pick the first as pivot and instead of reducing the data into half which
// is logarithmic we just reduced it by 1 so this dividing would take n times then collectively it would take O(n ^ 2) same as selection sort

// No tension most of time it perform in best case just simply by picking the pivot as random
// Simply runtime is number of times it will loop through the log n O(n logn)
export const quick_Sort = (provided_Array) => {
  /*So this Quick sort will work on the recursiveness every time it takes a pivot value which will be the first
  and then create two less than and greater than array and then again take the pivot value in both and create greater than
  and less than unti length is 1 less than or equal to 1 then it will start concatting the sorted depths until reach to the final function concation */
    if(provided_Array.length <= 1){
    // Condition to stop recursiveness (Base Condition)
        return provided_Array
    }
    // Initiate a less than array everytime
    let less_than_pivot=[]
    // Initiate greater than array everytime
    let greater_than_pivot=[]
    // Select the first value as a pivot everytime or randomly Picking the Pivot
    let random_Index=Math.floor(Math.random())
    let pivot = provided_Array[random_Index]

    for(let i = 1; i < provided_Array.length ; i++){
        // Starting from the 2nd item of the array
        if(provided_Array[i]<=pivot){
        // putting smaller in less than or left side
            less_than_pivot.push(provided_Array[i])
        }
        else{
        // putting greater in greater than or right side
            greater_than_pivot.push(provided_Array[i])
        }
    }
    // Connecting the sorted Arrays every time until the values are ready for the final Function
    let sortedArray= quick_Sort(less_than_pivot).concat(pivot).concat(quick_Sort(greater_than_pivot))
    return sortedArray
}

// console.log(quick_Sort([4,3,2,1]))
