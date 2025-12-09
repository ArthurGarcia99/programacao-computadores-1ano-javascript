function ex2(){
    let vet = []
    let par = []
    let impar = []
    for(let i = 0; i < 10; i++){
        vet.push(Number(prompt(`Numero inteiro posição ${i+1}:`)))
    }
    for(let i = 0; i < 10; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i] + 10)
        }
        else{
            impar.push(vet[i] * 5)
        }
    }

    alert(`Pares: ${par} \n Impares: ${impar}`)
}