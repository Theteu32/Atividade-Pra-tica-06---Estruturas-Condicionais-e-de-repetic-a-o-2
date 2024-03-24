let numero = 24

if (numero <= 1){
    numero = false
}

for(let i = 2; i * i <= numero; i++){
    if(numero % i === 0){
        console.log("Não é primo")
        break
    }
}
console.log('É primo')
