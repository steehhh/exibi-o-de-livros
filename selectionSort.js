const livros = require("./listaLivros")
const menorValor = require("./MenorValor")

for (let atual = 0 ; atual < livros.length - 1; atual++) {
    let menor = menorValor (livros, atual);
    let livroAtual = livros[atual];
    console.log("livro atual ", livros[atual])
    let livroMenorpreco = livros [menor];
    console.log("livro menor preço", livros[menor])

    livros[atual] = livroMenorpreco
    livros[menor] = livroAtual
}