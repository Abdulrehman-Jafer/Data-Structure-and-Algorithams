const searchArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

const linear_Search = (array, target) => {
  let currentNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    currentNumber = array[i];
    if (currentNumber === target) {
      return i;
    }
  }
  return "Cant Resolve Your Querry";
};

//   BinarySearch(itterative version of binary Search)
// Time complexity is big O of log with base 2 of n => O(logn) and space complexity constant O(1)
const binary_Search = (array, target) => {
  let start_Index = 0;
  let end_Index = array.length - 1;
  while (start_Index <= end_Index) {
    let mid_Index = Math.floor((start_Index + end_Index) / 2);
    if (array[mid_Index] === target) {
      return mid_Index;
    } else if (array[mid_Index] > target) {
      end_Index = mid_Index - 1;
    } else {
      start_Index = mid_Index + 1;
    }
  }
  return -1;
};

// Recursive Binary Search(recursive version)
// In this time complexity same big O of logarithmic n O(logn) while space complexity increases with the depth(which is how many time the function called himself)
// space complexity is alse O(log n)
const recursive_Binary_Search = (
  array,
  target,
  start_Index = 0,
  last_Index = array.length - 1
) => {
  let midPoint = Math.floor((start_Index + last_Index) / 2);
  if (target === array[midPoint]) {
    return midPoint;
  } else if (start_Index >= last_Index) {
    return -1;
  } else if (target > array[midPoint]) {
    return recursive_Binary_Search(
      array,
      target,
      (start_Index = midPoint + 1),
      last_Index
    );
  } else {
    return recursive_Binary_Search(
      array,
      target,
      start_Index,
      (last_Index = midPoint - 1)
    );
  }
};

// Another Recursive Binary Search(recursive version but not tracking the index just returning true if exist)
// Time Complexity same big O of log n that is O(logn) while space complexity directly proportional to the depth of recursions so space complexity would be O(log n) each new array increses the space with the half
// of previous space complexity that is memory usage.

const recursive_Binary_Search_Way_2 = (array, target) => {
  if (array.length == 0) {
    return false;
  } else {
    let midPoint = Math.floor(array.length / 2);
    if (array[midPoint] === target) {
      return true;
    } else if (target > array[midPoint]) {
      let sliced_array = array.slice(midPoint + 1);
      // console.log(sliced_array)
      return recursive_Binary_Search_Way_2(sliced_array, target);
    } else {
      let sliced_array = array.slice(0, midPoint);
      return recursive_Binary_Search_Way_2(sliced_array, target);
    }
  }
};
// Here in the linear search we can measure time complexity by O(n) and it will take constant amount of time for a particular search dont matter how long the length of array
// console.log(Math.floor(0.5));
// this will take the log with base 2 of n so in this case big O notation is O(log2 of n) so n is 200 it will take 7 steps 100,50,25,12,6,3,1,(0 worst case scenario)
// so in worst case scenario it will take log2 of n + 1 step

