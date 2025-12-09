function ex4(){
    let vet = []
    let soma = 0
    let media = 0
    let acima = 0
    let vet2 = []
    

    for(let i = 0; i < 8; i++){
        vet[i] = Number(prompt("Qual o numero na posicao " + (i+1) + ": "))
        soma+= vet[i]
    }
    media = soma / 8

    for(let i = 0; i < 8; i++){
        if(vet[i] > media){
            vet2.push(vet[i])
        }
    }
    alert("MEDIA CALCULADA: " + media + 
        "\nQuantos valores estao em cima da media: " + vet2.length + 
        "\nQuais sao os valores acima da media: " + vet2)
}