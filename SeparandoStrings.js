//Manipulando Strings e Arrays

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver!"

let myArray = phrase.split(" ") 
let phraseWithUnderscore = myArray.join("_")

