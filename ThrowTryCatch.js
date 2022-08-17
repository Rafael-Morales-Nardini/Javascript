//Throw

function sayMyName (name = ""){
    if (name === "") {
        throw "Nome é obrigatório"
    }
    console.log("Depois do erro")
}

//try...catch
try{
    sayMyName()
}
catch(e){
    console.log(e)
}