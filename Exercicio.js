/*var weight

console.log(typeof weight)

let name = "Rafael"
let age = 28
let stars = 4.9
let IsSubscribed = true
*/
let student = {    
    name: "Rafael",
age: 28,
weight: 90,
IsSubscribed: true}

//console.log(student)

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
let students = []


students = [
    student
]

//console.log(students)

//console.log(students[0])

const John = {    
    name: "John",
age: 32,
weight: 78,
IsSubscribed: true}

students[2] = John

students = {
   student,
   John
}

console.log(students)