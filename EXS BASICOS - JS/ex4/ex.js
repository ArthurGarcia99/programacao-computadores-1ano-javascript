function ex4(){
    let numero
    let numero2
    let aux = ""

    numero = Number(prompt("Informe o numero que deseja: "))
    
    for(let numero2 = 0; numero2 <= 10; numero2++){
        aux = aux + "\n" + (`${numero} X ${numero2} = ${numero * numero2}`)
    }
    alert(`${aux}`)
}