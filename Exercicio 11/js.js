let turno = prompt("Digite em qual turno você estuda sendo (M)para manha, (T) para tarde ou (N) para noturno!").toLowerCase()

switch(turno){
    case 'm':
        document.write("Bom diaaa!!");
    break;
    case 't':
        document.write("Boa tardeee!!");
    break;
    case 'n':
        document.write("Boa noiteee!!");     
    break;   
    default:
        document.write('Digite um dia válido!');
}