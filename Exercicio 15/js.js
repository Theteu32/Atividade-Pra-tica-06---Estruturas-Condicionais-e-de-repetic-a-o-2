let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

if (ladoA < (ladoB + ladoC)){
    if(ladoB < (ladoA + ladoC)){
        if (ladoC < (ladoA + ladoB)){
            if(ladoA == ladoB && ladoB == ladoC){
                document.write("Triângulo equilátero:")
            }
            else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
                document.write("Triângulo isósceles:")
            }else{
                document.write("Triângulo escaleno:")
            }
        }
    }
}