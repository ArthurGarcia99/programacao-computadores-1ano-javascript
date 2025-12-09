let biblioteca = [];
let quantidadelivros300paginas = 0;
let somapaginas = 0;
let media = 0;

for(let i = 0; i < 5; i++){
    let titulo = String((prompt(`Informe o titulo do livro ${i+1}:`)));
    let autor = String((prompt(`Informe o autor do livro ${i+1}:`)));
    let publicacao = Number((prompt(`Informe o Ano de publicação do livro ${i+1}:`)));
    let paginas = Number((prompt(`Informe a quantidade de paginas do livro ${i+1}:`)));

    let livro = {
        titulo: titulo,
        autor: autor,
        publicacao: publicacao,
        paginas: paginas
    };
    biblioteca.push(livro)
}
let maior = biblioteca[0]
    
    for(let i = 0; i < biblioteca.length; i++){
        somapaginas+= biblioteca[i].paginas;

        if(biblioteca[i].paginas > 300){
            quantidadelivros300paginas++;
        }
        
        if(biblioteca[i].paginas > maior.paginas){
            maior = biblioteca[i]
        }
    }

media = somapaginas/5;

console.log(`Quantidade de livros com mais de 300 paginas: ${quantidadelivros300paginas}
Titulo do livro com maior numero de paginas: ${maior.titulo}
Media de paginas dos livros: ${media}`)

