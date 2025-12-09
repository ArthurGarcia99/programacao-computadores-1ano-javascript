function ex3(){
    let vet = []
    let o1 = 0, o2 = 0, o3 = 0, porcentagem = 0

    for(let i = 0; i < 10; i++){
        do{vet[i] = (Number(prompt("Qual a sua opinião(1, 2 ou 3): ")))}
        while(vet[i] != 1 && vet[i] != 2 && vet[i] != 3)
    }
    for(i = 0; i < 10; i++){
        if(vet[i] == 1){
            o1++
        }else if(vet[i] == 2){
            o2++
        }else{
            o3++
        }
    }
    porcentagem = o3 / 10 * 100

    alert(`Responderam 1: ${o1} \n Responderam 2: ${o2} 
        \n Responderam 3: ${o3} \n Porcentagem: ${porcentagem}%`)
}