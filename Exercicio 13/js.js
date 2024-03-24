let num = prompt("Digite um numero para fazer uma contagem até ele pegando somente números ímpares")
document.write("Lista: <br>")
for(let i = 0; i <= num; i++){
    if(i % 2 !== 0){
        document.write(`${i} <br>`)
    }
}
document.write("Fim!")
