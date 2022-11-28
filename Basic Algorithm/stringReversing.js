// string revering

let text = "creating"
let reverseText = ''
for (let i = text.length; i >= 0; i--) {
    reverseText += text.charAt(i)
    
}
console.log(reverseText); // gnitaerc


//changing domail
function changeDomain(string, newDomain, oldDomian){
    let index = string.indexOf(oldDomian)
    let newDomains = string.substring(0, index)
    let newDOmainG =''
    if (string.includes(oldDomian)){
        if(index){
            newDOmainG +=newDomains.concat(newDomain)
   
       }
    }
   
    return newDOmainG
}

 console.log(changeDomain("example1@yahoo.com", "@gmail.com", "@yahoo.com")); // exmple1@gmail.com
 console.log(changeDomain("example2@gmail.com", "@hotmil.com", "@gmail.com")); // example2@hotmail.com

