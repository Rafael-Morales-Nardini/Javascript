/* Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou fahreheit e faça a transformação de uma unidade para outra

C = (F-32) * 5/9

F = C * 9/5 + 32
*/

//transform ('50F')
function transformDegree (degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const farenheitExist = degree.toUpperCase().includes('F')

    if(!celsiusExist && !farenheitExist){
        throw new Error("Grau não indentificado")
    }
    //Fluxo ideal F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //Caminho inverso
    if(celsiusExist) {
         updatedDegree = Number(degree.toUpperCase().replace("C", ""));
     formula = (celsius) => celsius * 9/5 + 32
     degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try{
console.log(transformDegree('50F'))
console.log(transformDegree('10C'))
//transformDegree('50Z')
}catch(error) {
    console.log(error)
}