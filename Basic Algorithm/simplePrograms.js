// EXERCISE 1 fuction that return min value just like Math.min()

const min = (a, b) => {
    if (a < b) {
        return a
    } 
    return b
}
// console.log(min(2, 5));
// console.log(min(8, 5));


// EXERCISE 2 Recursion

const isEven = (x) => {
    if (x == 0 ) {
       return true
    }else if (x == 1 ){
        return false
    }else if (x < 0){
        return isEven(-x)
    }else {
        return  isEven(x - 2 )
    }
    
}
console.log(isEven(75))
console.log(isEven(50))
console.log(isEven(-1))

// EXERCISE 3 BEAN counting
// first steb
const countBs = (char) => {
  let charLength = char.length
  let count = 0 
  for (i = 0; i < charLength; i++){
    if (char[i] == "B"){
        count += 1
    }
  }
  return count
}

// console.log(countBs("HBBbLO"))

// second Step 
const countChar = (string, char) => {
    let stringLength = string.length
    let count = 0
    for (i = 0; i < stringLength; i++){
        if(string[i] === char){
            count += 1
        }
    }
    return count
}

// let strg = "This is a text sample"
// console.log(countChar(strg, "a"));

