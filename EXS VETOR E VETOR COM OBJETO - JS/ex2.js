let empresa = [];
let somasalarios = 0;
let quantidadegerentes = 0;

for(let i = 0; i < 6; i++){
    nome = String(prompt(`Qual o nome do funcionario ${i+1} :`));
    cargo = String(prompt(`Qual o cargo do funcionario ${i+1} :`));
    salario = Number(prompt(`Qual o salario do funcionario ${i+1} :`));
    temposervico = Number(prompt(`Qual o tempo de servico do funcionario ${i+1} :`));

    let funcionario = {
        nome : nome,
        cargo : cargo,
        salario : salario,
        temposervico : temposervico
    };
    empresa.push(funcionario)
}

maior = empresa[0];
for(let i = 0; i < 6; i++){
    somasalarios+= empresa[i].salario;

    if(empresa[i].salario > 5000 && empresa[i].temposervico > 5){
        console.log(empresa[i]);
    }

    if(empresa[i].salario > maior.salario){
        maior = empresa[i];
    }

    if(empresa[i].cargo == "gerente"){
        console.log(empresa[i]);
        quantidadegerentes++;
    }
}

let media = somasalarios/6;

console.log(`Funcionario com o maior salario: ${maior.nome}
Media salarial: ${media.toFixed(2)}
Quantos funcionarios são gerentes: ${quantidadegerentes}`
)