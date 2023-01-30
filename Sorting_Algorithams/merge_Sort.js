



const arrayToBeSort=[9,8,6,5,4,3,2,1]

// Merge Sort Work On the Single Strategy that is DIVIDE AND CONQUER


/*Unlike the Quick_Sort It will always divide the array into half so even in the worst case the runtime would be n tims logn O(n logn) where n is for number of merges 
and logn for the number of array splits but still Quick sort is more used*/

const compareAndMerge=(leftSide,rightSide)=>{
    // Time Complexity of linear big O(n) that is n number of merge steps
    let sortedArray=[]
    let i = 0;
    let j = 0;
    while(i < leftSide.length && j < rightSide.length){
        if(leftSide[i] < rightSide[j]){
            sortedArray.push(leftSide[i])
            i++;
        }
        else {
            sortedArray.push(rightSide[j])
            j++;
        }
    }
    // When above condition fails due to unequal lengths for Example If Left Side is greater than right Side
    while (i < leftSide.length){
        sortedArray.push(leftSide[i])
        i++;
    }
    while (j < rightSide.length){
        sortedArray.push(rightSide[j])
        j++;
    }
    return sortedArray
    }
    
    // Space complxity is linear O(n) the main factor.
const merge_Sort=(array)=>{
        // Takes overarll O(n log n) and n number from number of merges while log n from number of slices and even slice operation also take runtime of O(n or k) so overall 
        // time complexity would be O(kn log n) yes if we remove slice operation and use some indexes texhnique for the new Passed Array then the original run time would be
        //  big O of n times log n that is O(n logn) where n from the merges and log n from the split operations
     if(array.length <= 1){
        // This condition run passed array length is reduced to 1
        return array;
     }
     let midPoint = Math.floor(array.length / 2)
    //  Find Mid Poing
     let leftSide = merge_Sort(array.slice(0,midPoint))
    //  Keep Doing Left Side Until both sides of Left Side are reduced to 1 then compare and merge.
     let rightSide= merge_Sort(array.slice(midPoint))
    //  Now for applying same recursiveness to the right-Side 
     return compareAndMerge(leftSide,rightSide)
    // Will also merge the FINAL leftSide And RightSife of the Original Function when the leftSide And RightSide are Sorted
    }

    // Run time is linear that is big O of n O(n)
const verify_Sorted = (passedArray) =>{
    if(passedArray.length <= 1){
        return true
    }
    // This recursive will stop if the passed array length is reduced to 1
    return passedArray[0] < passedArray[1] && verify_Sorted(passedArray.slice(1))
}