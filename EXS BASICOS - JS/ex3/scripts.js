function faixaetaria(){
    let conta = 1
    let idade = 0
    f1 = 0
    f2 = 0
    f3 = 0
    f4 = 0
    f5 = 0
    while(conta <= 8){
        idade = Number(prompt("Informe Idade da pessoa " + conta + " :"))
        conta++
        if(idade >= 0 && idade <= 15){
            f1++;
        }
        else if(idade >= 16 && idade <= 30){
            f2++
        }
        else if(idade >= 31 && idade <= 45){
            f3++
        }
        else if(idade >= 46 && idade <= 60){
            f4++
        }
        else if(idade > 60 && idade <= 130){
            f5++
        }
        else{
            alert(`Idade é invalida`)
            continue
        }
    }

        porcentagem = f1 / 8 * 100
        porcentagem2 = f5 / 8 * 100

        alert(`Resultados da pesquisa:
            - Primeira Faixa Etaria: ${f1}
            - Segunda Faixa Etaria: ${f2}
            - Terceira Faixa Etaria: ${f3}
            - Quarta Faixa Etaria: ${f4}
            - Quinta Faixa Etaria: ${f5}
            - Porcentagem da 1 faixa etaria ao resto: ${porcentagem}%
            - Porcentagem da 5 faixa etaria ao resto: ${porcentagem2}%`)
    
}