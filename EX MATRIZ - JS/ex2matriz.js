let matriz = []
let nomevendedores = []
let somatodasvendas = 0

for(let l = 0; l < 4; l++){
    matriz[l] = []
    nomevendedores[l] = String(prompt(`Nome do ${l+1} vendedor: `))
    for(let c = 0; c < 7; c++){
        matriz[l][c] = parseInt(Math.random() * 100)
    }
}

let maiorvenda = matriz[0][0]

for(let l = 0; l < 4; l++){
    let somatoria = 0;
    for(let c = 0; c < 7; c++){
        somatoria+= matriz[l][c]
    }
    console.log(`Valor vendido pelo vendedor ${nomevendedores[l]}: ${somatoria}`)
}

for(let c = 0; c < 7; c++){
    let somatoriacoluna = 0
    for(let l = 0; l < 4; l++){
        somatoriacoluna += matriz[l][c]
    }
    console.log(`Valor vendido no dia ${c+1}: ${somatoriacoluna}`)
}

let linha = 0
let coluna = 0

for(let l = 0; l < 4; l++){
    for(let c = 0; c < 7; c++){
        if(matriz[l][c] > maiorvenda){
            maiorvenda = matriz[l][c]
            linha = l
            coluna = c
        }
        somatodasvendas+= matriz[l][c]
    }
}

console.log(`Maior venda foi de ${maiorvenda}, linha ${linha}, coluna ${coluna}.
Media Geral da semana foi ${somatodasvendas/28}`)
