let matriz = [];
let somadiagonalprincipal = 0;
let mediadiagonalprincipal = 0;
let somadiagonalsecundaria = 0;
let mediadiagonalsecundaria = 0;
let maiorindice = 0;
let contagemsuperior = 0;
let regiao = [];
let dia = [];

for(let l = 0; l < 5; l++){
    matriz[l] = []
    for(let c = 0; c < 5; c++){
       do{matriz[l][c] = Number(prompt(`O indice de poluição (entre 0 e 500): `))}
       while(matriz[l][c] < 0 || matriz[l][c] > 500)
    }
    regiao[l] = String(prompt(`Qual a região estudada: `))
    dia[l] = Number(prompt(`Qual dia foi estudada: `))
}

maiorindice = matriz[0][0];

for(let l = 0; l < 5; l++){
    for(let c = 0; c < 5; c++){
        if(l == c){
            somadiagonalprincipal+= matriz[l][c];
            console.log(`Indice da diagonal principal; ${matriz[l][c]}, regiao: ${regiao[l]} dia: ${dia[c]}`)
        }
    }
}

mediadiagonalprincipal = somadiagonalprincipal/5
console.log(`Media diagonal principal é ${mediadiagonalprincipal}`)

for(let l = 0; l < 5; l++){
    for(let c = 0; c < 5; c++){
        if(l + c == 4){
            somadiagonalsecundaria+= matriz[l][c]
            console.log(`Indice da diagonal secundaria: ${matriz[l][c]}, região: ${regiao[l]} dia: ${dia[c]}`)
        }
    }
}

mediadiagonalsecundaria = somadiagonalsecundaria/5;
console.log(`Media diagonal secundaria é ${mediadiagonalsecundaria}`)

let linha = 0;
let coluna = 0;

for(let l = 0; l < 5; l++){
    for(let c = 0; c < 5; c++){
        if(matriz[l][c] > maiorindice){
            maiorindice = matriz[l][c];
            linha = l;
            coluna = c;
        }
    }
}

for(let l = 0; l < 5; l++){
    for(let c = 0; c < 5; c++){
        if(matriz[l][c] > 300){
            contagemsuperior++
        }
    }
}

let menormediaregiao = Infinity
let linhamenormedia = 0

for(let l = 0; l < 5; l++){
    let somatoriaregiao = 0
    let mediaregiao = 0
    for(let c = 0; c < 5; c++){
        somatoriaregiao+= matriz[l][c]
    }
    mediaregiao = somatoriaregiao/5
    if(mediaregiao < menormediaregiao){
        menormediaregiao = mediaregiao
        linhamenormedia = l
    }
}

console.log(`A região que teve em media menor indice de poluição em 5 dias foi a ${regiao[linhamenormedia]}, com indice de ${menormediaregiao}.`)
console.log(`O maior indice de poluição foi de ${maiorindice} na região ${regiao[linha]} no dia ${dia[coluna]}.`)
console.log(`O indice foi superior a 300 ${contagemsuperior} vezes.`)