let cinema = [];

for(let i = 0; i < 3; i++){
    let titulo = String(prompt(`Informe o titulo do filme ${i+1}`));
    let diretor = String(prompt(`Informe o diretor do filme ${i+1}`));
    let ano = Number(prompt(`Informe o ano do filme ${i+1}`));
    let duracao = Number(prompt(`Informe o duração do filme ${i+1}`));

    let filme ={
        titulo: titulo,
        diretor: diretor,
        ano: ano,
        duracao: duracao
    };
    cinema.push(filme);
}

console.log(cinema)