function ex10(){
let somaPares = 0;
let somaPrimos = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
    // Soma dos pares
    if (numero % 2 === 0) {
        somaPares += numero;
    }
    // Verifica se é primo
    let divisores = 0;
    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0) {
            divisores++;
        }
    }
    if (divisores === 2) {  // Só dois divisores: 1 e ele mesmo
        somaPrimos += numero;
    }
}
alert(`Soma dos números pares: ${somaPares}`);
alert(`Soma dos números primos: ${somaPrimos}`);
}