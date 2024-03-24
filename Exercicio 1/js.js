let idade = prompt("Digite sua idade: ")
let idade2 = 18 - idade
if (idade >= 18){
    document.write("Pode dirigir!!")
}
else{
    document.write(`Você não pode digirir ainda, faltam ${idade2} anos para você dirigir!`)
}