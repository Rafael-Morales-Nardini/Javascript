//Manipulando Arrays
let techs = ["html", "css", "js"]

//Adicionar um item no fim
console.log(techs.push("nodejs"))
//Adicionar no começo
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//Pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//Remover 1 ou amis itens em qualquer posição do array
techs.splice(1, 1)
//Encontrar a posição de um elemento do array
let index = techs.indexOf('css')
//ferramenta de remoção
techs.splice(index, 1)



console.log(techs)