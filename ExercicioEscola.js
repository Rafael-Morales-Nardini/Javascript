/* Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

*90+ - A
*entre 80 e 89 - B
*entre 70 a 79 - C
*entre 60 a 69 - D
*menor que 60 - F

*/

let grade = 91
let aGrade = grade >= 90
let bGrade = grade < 90  && grade >= 80
let cGrade = grade < 80  && grade >= 70
let dGrade = grade < 70  && grade >= 60
let fGrade = grade < 60

if (aGrade){
    console.log('A')
} else if (bGrade){
    console.log('B')
} else if (cGrade){
    console.log('C')
}else if (dGrade){
    console.log('D')
}else if (fGrade){
    console.log('F')
} else {
    console.log = "Nota inválida"
}