let nascimento = Number(prompt("Digite o ano que nasceu: "));
let ano = 2024;

let calculo = ano - nascimento

if (calculo >= 18){
    document.write("Pode votar")
}else{
    document.write("Não pode votar")
}