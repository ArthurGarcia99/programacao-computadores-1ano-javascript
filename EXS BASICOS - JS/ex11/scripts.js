function pesquisaSatisfacao() {
    let nota; // nota a qual vai ser inserida
    let conta = 1;  // conta de 1 a 10
    let soma = 0; // soma das notas
    let satisfeitos = 0 // inicia sem nenhum satisfeitos
    let insatisfeitos = 0 // inicia sem nenhum insatisfeitos

    while (conta <= 10) {
        nota = Number(prompt('Informe a nota de satisfação ' + conta + ': ')); // utiliza o prompt para colocar as notas
        
        
        if(nota >= 8 && nota <= 10) {
            satisfeitos++; // satisfeitos = satisfeitos + 1
        } else if(nota >= 0 && nota < 5) {
            insatisfeitos++; // insatisfeitos = insatisfeitos + 1
        } else if(nota < 0 || nota > 10) {
            alert(` Nota Inválida `)
            continue // volta para o inicio, sem incrementar conta
        }
        
        soma += nota; // soma = soma + nota
        conta++; // conta = conta + 1
    } 

    let media = soma / 10;

    // Mostra o resultado na tela
    alert(`Resultados da Pesquisa:
    - Média das notas: ${media.toFixed(1)} 
    - Total de satisfeitos (nota >= 8): ${satisfeitos}
    - Total de insatisfeitos (nota < 5): ${insatisfeitos}`);
    // tofixed é utilizado para colocar um tantos de casas dps do numero (numero quebrado)
}