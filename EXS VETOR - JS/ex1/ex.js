function ex1(){
    let vet = []
    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o numero da posição ${i+1}`)))
    }
    let par = []; let impar = []
    for(let i = 0; i < 6; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i])
        } else{
            impar.push(vet[i])
        }
    }

    alert(`Numeros pares: ${par} e Quantidade de numeros pares: ${par.length} 
        \n Numeros Impares: ${impar} e Quantidade de numeros impares: ${impar.length}`)
}