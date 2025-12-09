function ex6(){
    let vet = []
    let numerousuario = 0
    let situacao = ""
    let contagem = 0
    let posicao = 0
    let somaposicoes = ""

    for(let i = 0; i < 12; i++){
        vet[i] = Number(prompt("Qual o numero inteiro na posicao " + (i+1) + ": "))
    }
    numerousuario = Number(prompt("Qual numero deseja buscar no vetor: "))
    for(let i = 0; i < 12; i++){
        if(numerousuario == vet[i]){
            posicao = i
            somaposicoes+= posicao + ", "
            situacao = "Esta no vetor"
            contagem++
        } else{
            situacao = "Nao esta no vetor"
        }
    }
    alert("O numero esta ou nao no vetor: " + situacao + 
        "\nPosicoes que aparece: " + somaposicoes + 
        "\nQuantas vezes aparece: " + contagem)
}
