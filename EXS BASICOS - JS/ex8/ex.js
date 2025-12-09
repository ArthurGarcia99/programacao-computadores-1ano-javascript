function ex8(){
    let idade = 0
    let peso = 0
    let altura = 0
    let olhos = ""
    let cabelo = ""
    let idade50peso60 = 0
    let somaidade1 = 0
    let pessoasazuis = 0
    let media1 = 0
    let porcentagem = 0
    let pessoasruivas = 0

    for(let i = 0; i < 6; i++){
        do{idade = Number(prompt("Qual a sua idade? "))}
        while(idade < 0)
        do{peso = Number(prompt("Qual seu peso? "))}
        while(peso < 0)
        do{altura = Number(prompt("Qual sua altura? "))}
        while(altura < 0)
        do{olhos = String(prompt("Qual a cor de seus olhos (A OU P OU V OU C)? "))}
        while(olhos != "A" & olhos != "P" & olhos != "V" & olhos != "C")
        do(cabelo = String(prompt("Qual a cor de seus cabelos (P OU C OU L OU R)? ")))
        while(cabelo != "P" & cabelo != "C" & cabelo != "L" & cabelo != "R")
        if(idade > 50 & peso < 60){
            idade50peso60++
        } else if(altura < 1.50){
            idade++
            somaidade1+= idade
        } else if(olhos = "A"){
            pessoasazuis++
        } else if(cabelo = "R" & olhos != "A"){
            pessoasruivas++
        }
    }
    
    media1 = somaidade1 / idade
    porcentagem = pessoasazuis / 6 * 100

    alert(`Quantidade pessoas acima de 50 anos e peso inferior a 60kg: ${idade50peso60} 
        \n Media das idades das pessoas com altura inferior a 1.50m: ${media1} 
        \n A porcentagem das pessoas com olhos azuis entre todas as analisadas: 
        ${porcentagem} \n Quantidade de pessoas ruivas e que não possuiem olhos azuis: ${pessoasruivas}`)
}