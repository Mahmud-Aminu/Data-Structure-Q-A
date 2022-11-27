// Reversing an array
// Arrays have a reverse method that changes the array by inverting the
// order in which its elements appear. For this exercise, write two functions, 
// reverseArray and reverseArrayInPlace. The first, reverseArray,
// takes an array as argument and produces a new array that has the
// same elements in the inverse order. The second, reverseArrayInPlace,
// does what the reverse method does: it modifies the array given as argument 
// by reversing its elements. Neither may use the standard reverse
// method.
// Thinking back to the notes about side effects and pure functions in
// the previous chapter, which variant do you expect to be useful in more
// situations? Which one runs faster?

const reverseArray = (array) => {
    let inverseArray = []
    for (arr of array){
        inverseArray.unshift(arr)
    }
    return inverseArray
}
 console.log(reverseArray([1,2,3,4]));

const reverseIn = (array) => {
    let result = []
    for (arr in array) {
        result.push(arr)
    }
    return result
}

console.log(reverseArray(reverseArray([1,2,3,4])));
