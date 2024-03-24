let votosNulos = 200;
let votosBrancos = 400;
let votosValidos = 564;

let eleitores = votosNulos + votosBrancos + votosValidos;

let votosNulosPorcentagem = (votosNulos / eleitores) * 100 ;
let votosBrancosPorcentagem = (votosBrancos / eleitores) * 100 ;
let votosValidosPorcentagem = (votosValidos / eleitores) * 100 ;

document.write(`O total de eleitores é ${eleitores}`+ "<br>"+ "<br>");
document.write(`A procentagem de Votos nulos e de ${votosNulosPorcentagem}%`+ "<br>"+ "<br>");
document.write(`A procentagem de Votos brancos e de ${votosBrancosPorcentagem}%`+ "<br>"+ "<br>");
document.write(`A procentagem de Votos válidos e de ${votosValidosPorcentagem}%`);