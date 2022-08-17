// if...else
//Se...Se não
let temperature = 38
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('Febre alta')
} else if (mediumTemperature){
    console.log('Febre')
}
else{
    console.log('Saudável')
}