function lucro(){
    
    let precoinicial = 5.0
    const despesa = 200
    let ingressosbase = 120
    let lucro
    let auxiliar = ""
    let maiorlucro = 0
    let ingressosmaiorlucro = 0
    let precomaiorlucro = 0
    

    while(precoinicial >= 1){
       lucro = (precoinicial * ingressosbase) - despesa
       if(lucro > maiorlucro){
        maiorlucro = lucro
        precomaiorlucro = precoinicial
        ingressosmaiorlucro = ingressosbase
       }
       auxiliar = auxiliar + (`\nPreço: ${precoinicial} - Quantidade: ${ingressosbase} - Despesas: ${despesa} Lucro: ${lucro}`)
       precoinicial = precoinicial - 0.50
       ingressosbase = ingressosbase + 26
       
    }
    alert(auxiliar)
    alert(`Maior Lucro: ${maiorlucro} com preço: ${precomaiorlucro} e quantidade: ${ingressosmaiorlucro}`)
}

