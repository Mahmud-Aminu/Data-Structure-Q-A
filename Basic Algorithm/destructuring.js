const user = {
  name: "Mahmud",
  age: 27,
  phone_number: "+2348130000000",
  nationality: "Nigeria"
}

// How you to pass object properties as parameters using destructuring.
const aboutMe = ({name, age, nationality, phone_number}) => {
  return `Hello, My name is ${name}, I am ${age} years old. \n${nationality} is my country and you can reach me with ${phone_number}.`
}

aboutMe(user)
// Hello My name is Mahmud, I am 27 years old.
// Nigeria is my country and you can reach me with +2348130000000.
