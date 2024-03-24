let idade = prompt("Digite sua idade: ")
let cnh = prompt("Possui CNH ?, se sim digite 1 caso não tenha digite 2")

if(cnh != 1 && cnh != 2){
    document.write("Precisa digitar 1 ou 2 para sabermos se tem CNH ou não")
}
else if (idade >= 18 && cnh == 1){
    document.write("Pode dirigir!!")
}
else{
    document.write(`Você não pode digirir ainda`)
}