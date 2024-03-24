let compras = parseFloat(prompt('Digite o valor da sua compra'));
let aVista = String(prompt('Você deseja pagar à vista? Sim ou Não?')).toLowerCase();

if(`sim` === aVista){
    let aVista = compras * 0.025;
    let totalAvista = compras - aVista;
    document.write(`O total da sua compra é de: R$${compras}. E o seu desconto foi de: RS$${totalAvista}`);
} else{
    parcelas = parseInt(prompt('Digite o número de parcelas que deseja fazer: (Máx. 15x)?'));
}  if(parcelas >= 2 && parcelas <= 5){
    let totalParcela = compras / parcelas;
    document.write(`A sua compra é de: R$${compras}. E as suas parcelas são: ${parcelas}x R$${totalParcela.toFixed(2)}`);
} else if(parcelas >= 6 && parcelas <= 10){
    let juros = compras * 0.06;
    let totalParcela = (compras / parcelas) + juros;
    document.write(`A sua compra é de: R$${compras}. E as suas parcelas são: ${parcelas}x R$${totalParcela.toFixed(2)}`);
} else if(parcelas >= 11 && parcelas <= 15){
    let juros = compras * 0.13;
    let totalParcela = (compras / parcelas) + juros;
    document.write(`A sua compra é de: R$${compras}. E as suas parcelas são: ${parcelas}x R$${totalParcela.toFixed(2)}`);
};