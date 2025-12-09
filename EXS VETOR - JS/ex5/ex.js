function ex5(){
    let vet = []
    let maiores = 0
    let menores = 0
    let iguais = 0

    for(let i = 0; i < 10; i++){
        vet[i] = Number(prompt("Qual o numero na posicao " + (i+1) + ": "))
    }

    for(let i = 1; i < 10; i++){
        if(vet[i] > vet[0]){
            maiores++
        } else if(vet[i] < vet[0]){
            menores++
        } else{
            iguais++}
    }

    alert("Maiores que o primeiro numero: " + maiores + 
        "\nMenores que o primeiro numero: " + menores + 
        "\nIguais ao primeiro numero: " + iguais)
}
