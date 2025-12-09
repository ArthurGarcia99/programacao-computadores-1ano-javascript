let filmes = [
    {
    titulo: "Velozes e Furiosos 9",
    diretor: "Justin Lin",
    ano: 2021,
    duração: 143 + " Minutos"
},
{
    titulo: "Jurassic World: O Mundo dos Dinossauros",
    diretor: "Colin Trevorrow",
    ano: 2015,
    duração: 124 + " Minutos"
},
{
    titulo: "Duna",
    diretor: "Denis Villeneuve",
    ano: 2021,
    duração: 155 + " Minutos"
}
];

for(let i = 0; i < filmes.length; i++){
    console.log(`Filme ${i+1}: \n ${filmes[i].titulo} \n ${filmes[i].diretor} \n ${filmes[i].ano} \n ${filmes[i].duração}`)
}
