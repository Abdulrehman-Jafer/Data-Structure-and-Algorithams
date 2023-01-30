const ArraySum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
// Now using Recursive approach
const recursive_Sum = (array, i = 0, sum = 0) => {
  if (i < array.length) {
    sum = sum + array[i];
    return recursive_Sum(array, (i = i + 1), (sum = sum));
  }
  return sum;
};
// console.log(ArraySum([1, 2, 3,4,5,6,7,8,9,10]))
// console.log(recursive_Sum([0,0,0,0]));
const recursive_Sum_Two=(array)=>{
    if(array.length < 1){
        return array
    }
    let remaining_Sum = recursive_Sum_Two(array.slice(1))
    return Number(array[0] + remaining_Sum)
}

console.log(recursive_Sum_Two([1,2,3]))