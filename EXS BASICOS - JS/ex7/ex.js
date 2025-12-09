function ex7(){
let idade = 0
let peso = 0
let altura = 0
let idade50anos = 0
let somaalturas = 0
let mediaalturas = 0
let porcentagempeso = 0

for(let i = 1; i < 6; i++){
    do{idade = Number(prompt("Qual sua Idade? "))}
    while(idade < 0)
    do{altura = Number(prompt("Qual sua Altura? "))}
    while(altura < 0)
    do{peso = Number(prompt("Qual sua Peso? "))}
    while(peso < 0)
    if(idade > 50){
        idade50anos++
    } else if(10 <= idade <= 20){
        somaalturas += altura
        altura++
    }else if(peso < 40){
        peso++
    }
}

mediaalturas = somaalturas / altura
porcentagempeso = peso / 5 * 100

alert(`Quantidade pessoas com idade superior a 50: ${idade50anos} 
    \n Media altura das pessoas entre 10 e 20: ${mediaalturas} \n 
    Porcentagem pessoas inferior a 40kg: ${porcentagempeso}%`)
}