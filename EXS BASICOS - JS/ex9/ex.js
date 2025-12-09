function ex9(){
    let idade = 0
    let pesos = 0
    let alturas = 0
    let somaidades = 0
    let media = 0
    let quantidadepeso90 = 0
    let idade10e30 = 0
    let altura190 = 0

    for(let i = 0; i < 10; i++){
        do {idade = Number(prompt("Informe sua idade: "))}
        while(idade < 0)
        do {pesos = Number(prompt("Informe seu peso: "))}
        while(pesos < 0)
        do {alturas = Number(prompt("Informe sua altura: "))}
        while(alturas < 0)
        somaidades+= idade
        if(pesos > 90 & alturas < 1.50){
            quantidadepeso90++
        } else if(10 < idade < 30){
            idade10e30++
        } else if(alturas > 1.90){
            altura190++
        }
    }
    media = somaidades / 10
    porcentagem = idade10e30 / altura190 * 100

    alert(`Media das idades 10 pessoas: ${media} 
        \n Quantidade de pessoas com peso superior a 90kg e altura inferior a 1.50: 
        ${quantidadepeso90} \n Porcentagem de pessoas de idade entre 10 e 30 e maiores que 1.90: 
        ${porcentagem}`)
}