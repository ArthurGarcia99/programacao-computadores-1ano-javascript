function exe1(){
    let a, b, c, d , fax
    let grupo = 1
    while(grupo <= 5){
    let conta = 1
    a = Number(prompt(`Informe o valor de A:`))
    b = Number(prompt(`Informe o valor de B:`))
    c = Number(prompt(`Informe o valor de C:`))
    d = Number(prompt(`Informe o valor de D:`))
    while(conta <= 3){
        if(a > b){
            fax = a; a = b; b = fax
        }
        if(b > c){
            fax = b; b = c; c = fax
        }
        if(c > d){
            fax = c; c = d; d = fax
        }
        conta++
    }
    grupo++
    alert(`- Ordem Crescente: ${a} ${b} ${c} ${d}
- Ordem Decrescente: ${d} ${c} ${b} ${a}`)
}

    
}