let palavra

palavra = String(prompt("Qual palavra? "))

palavra = palavra.trim()
let vetpalavras = palavra.split("").reverse("").join("")

if(palavra == vetpalavras){
    console.log(`É palimdromo`)
} else{
    console.log(`Não é palimdromo`)
}