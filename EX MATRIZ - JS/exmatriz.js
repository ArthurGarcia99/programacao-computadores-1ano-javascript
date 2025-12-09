let matriz = []
let soma = 0
let pares = 0
let diagonalsecunadaria = []

for(let l = 0; l < 3; l++){
    matriz[l] = []
    for(let c = 0; c < 3; c++){
        matriz[l][c] = Number(prompt(`Qual o elemento entra na matriz posição[[${l}][${c}]]`))
    }
}

    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            soma+= matriz[l][c]
            if(matriz[l][c] % 2 == 0){
                pares++
            }
        }
    }
    let n = matriz.length
    for(let l = 0; l < 3; l++){
        diagonalsecunadaria+=  matriz[l][n - 1 - l] + ", " 
    }


console.log(`Soma de todos os elementos: ${soma}
Quantidade de numeros pares: ${pares}
Valores diagonal secundaria: ${diagonalsecunadaria}`)