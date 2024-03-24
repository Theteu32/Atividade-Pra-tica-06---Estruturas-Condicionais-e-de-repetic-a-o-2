let altura = Number(prompt("Informe sua altura: "));
let sexo = prompt("Informe seu sexo com feminino(1) ou masculino(2): ").toLowerCase();

let medidaF = (62.1 * altura) - 44.7

let medidaM = (72.7 * altura) - 58

if(isNaN(altura) || altura < 0){
    document.write("Digite a altura corretamente!!")
}

switch(sexo){
    case'feminino':
        sexo = 1
    break;
    case'masculino':
        sexo = 2
    break
}

if (sexo != 1 && sexo != 2){
    document.write("Digite o sexo corretamente!!")
}
else if (sexo == 1){
    document.write(`Como você é do sexo femino com essa altura seu peso ideal seria: ${medidaF.toFixed(2)}Kg`)
}else{
    document.write(`Como você é do sexo masculino com essa altura seu peso ideal seria: ${medidaM.toFixed(2)}Kg`)
}

