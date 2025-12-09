function ex6(){
    let codigo = ""
    let somaVista = 0
    let somaPrazo = 0
    let soma = 0
    let somatoriaTerceiro = 0

    for(let i = 1; i <= 15; i++){
    do { codigo = String(prompt("Informe sua forma de pagamento (P OU V): "))}
    while(codigo != "V" && codigo != "P")
    do{ valorprestacao = Number(prompt("Informe o valor: ")) }
    while(valorprestacao < 0)
    if(codigo == "V"){
        somaVista += valorprestacao
        } 
        else{
            somaPrazo += valorprestacao
            somatoriaTerceiro += valorprestacao/3
        }
    }

    soma = somaVista + somaPrazo

    alert(`Valor total compras a vista:  ${somaVista} \n Valor total compras a prazo:  
        ${somaPrazo} \n Valor total: ${soma} \n Valor primeira prestações: 
        ${somatoriaTerceiro}`)
}