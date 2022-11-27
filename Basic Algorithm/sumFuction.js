const range = (start, stop, step  = 1) => {
    let result = []
    let array_sum = 0

    if(step > 0 ){
        for (i = start; i <= stop; i = i + step){
            result.push(i) 
        }
    } else if (start > stop && step < 0){
        for (i = start; i >= stop; i--){
            result.push(i) 
        }
    }

   
    return result 

}

console.log(range(20, 10, -2));

const sum = (range) => {
   
    let result = 0
    for (i of range){
        result += i
    }
    return result
}
// console.log(sum(range(1, 10)))
