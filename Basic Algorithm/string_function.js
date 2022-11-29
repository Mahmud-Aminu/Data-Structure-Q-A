let input = []
// console.log(input.length);
// console.log(typeof input);
/* Write a function to check whether an input is string or not*/

function is_String(input){
    if (typeof input === 'string'){
       return true;
    }else{
        return false
    }
}

// is_String()

// Write  function to check if a string is blank or not
function is_blank(input){
if(input.length < 0 && typeof input === 'string'){
    return true
}
return "Must be  string"
}

console.log(is_blank(input)); // true



// Write a js function to convert string to array
let str = "Robin Lawal"
function string_to_arr(x) {
    let arr = str.split(' ')
    return arr
}

console.log(string_to_arr(str)); // ["Robin", "Lawal"]


// Write a function to extract specific xter in a string

function truncate_string(s, l){
   return s.slice(0, l)
}

console.log(truncate_string(str, 4)); // Robin

// Write aa js funct to convert a string to abbrevtn

function abbre_string(x){
  let split_names = x.trim().split(' ');
  if(split_names.length > 1){
    return(split_names[0] + " " + split_names[1].charAt(0))
  }
}

console.log(abbre_string(str)) // Robin L


// 

function protect_email(email){
    let index = email.indexOf('@')
    let encrypt = '....' + email.substring(index)
    let protect = email.substring(0, 4) + encrypt
   
    return protect
}

console.log(protect_email('mlewsl@example.com')) // mlew....@exaample.com


//Create function that  paramatize string

function string_paramatize(str){
    let  d = str.split('')
    let new_str = []
    for(i = 0; i <= d.length; i++){
        if(str[i] == " "){
            new_str.push("-")
        }else{
            new_str.push(str[i])
        }
       
    }
   return (new_str.join('')).toLowerCase()
}

console.log(string_paramatize("Welcome to the show USD")) // Welcome-to-the-show-usd

// function to capitalize first letter of string

function capitalie(str) {
    let fl = str.charAt(0).toUpperCase()
    return fl.concat(str.substring(1))
}

console.log(capitalie('enjoy my class')); // Enjoy my class



// function to capitalize first letter of string
function capitalise_Word(str) {
   return str.replace(/\w\S*/g, txt => {
    
    let cmt = txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase() 
    
    return cmt
}
    
   )
}

console.log(capitalise_Word("end of dys")) // End Of Days


//  function to camelCase a string or
function camelCase(str, c) {
    let strg =str.split(' ')
    let strg1 = strg[0].charAt(0).toUpperCase() + strg[0].substring(1)
    let strg2 = strg[1].charAt(0).toUpperCase() + strg[1].substring(1)
    let txt = ''
    if(c){
      txt += strg1 + c + strg2
    }else{
        txt += strg1 + strg2
    }
   


    return txt
}

// console.log(camelCase("lukes john"));
// console.log(camelCase("lukes john", "-"));
// console.log(camelCase("lukes john", "_"));


//   function to concatenate a  given string n times

function concat(str, n=1 ) {
 return str.repeat(n)   
}

// console.log(concat("Hi!", 2)); // Hi!Hi!



// function to insert a string within a string at aa paarticular position (default is 1)

function inser(str, insert, position ) { 
    let nstr = ''
    if(position > 1 ){
        nstr +=  str.substring(0, position)  + insert + " " + str.substring(position)

    }else if (insert){
        nstr += insert + " " + str
    }else{
        nstr += str
    }

    return nstr
}

 console.log(inser("We are doing some exercise " ));  //We are doing some exercise
 console.log(inser("We are doing some exercise ", "Javascript" ));  // Javascript We are doing some exercise
 console.log(inser("We are doing some exercise ", "Javascript", 18 )); //We are doing some javascript exercise


// write a js function to humanize numbers (formats a number to a human readable string.)
// with correct suffix such as 1st, 2nd, 3rd, 4th etc


function humanize_format(x){
    let str = x.toString()
    let format = ''
   if (str.endsWith('1')){
    format += str + "st"
   }else if (str.endsWith('2')){
    format += str + "nd"
   }else if (str.endsWith('3')){
    format += str + "rd"
   }else{
    format += str + "th"
   }

    return format
}


console.log(humanize_format(1)); //1st
console.log(humanize_format(8)); // 8th
console.log(humanize_format(301)); // 301st
console.log(humanize_format(402)); // 402nd


// write a function to truncate a string of xters. translatable ellips seaquence ("....") by default or specefied xter

function truncate_String(str, length, seq = "....") {
   if (str.length > length){
    return str.substring(0, length) + " " + seq
   }else{
    return str
   }
}

console.log(truncate_String("we are doing js exercises")); // we are doing js exercises
console.log(truncate_String("we are doing js exercises", 19)); // we are doing js exe ...
console.log(truncate_String("we are doing js exercises", 15, "!!"));// we are doing js !!


