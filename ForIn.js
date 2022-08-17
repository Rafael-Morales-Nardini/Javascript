//For...in
let person = {
    name: "John",
    age: 30,
    weight: 88.3
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}