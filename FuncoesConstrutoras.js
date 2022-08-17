/* Function() constructor

*Expressão new
*Criar novo objeto
*this keyword
*/

function Person (name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }

}
const Rafael = new Person("Rafael")
const Pedro = new Person("Pedro")
console.log(Rafael.walk())
console.log(Pedro.walk())