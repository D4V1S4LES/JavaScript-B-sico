// function livro(nome, ano, autor) {
//   const nomeMaior = nome.toUpperCase()
//   const totalAno = 2025 - ano;
//   const frase = nome + ' por ' + autor; 

//   //Criando um objeto com as variáveis acima
//   const objeto = {
//     nome: nomeMaior,
//     ano: totalAno,
//     frase: frase
//   };

//   //Declarando o objeto como retorno
//   return(objeto);
// };

//Reduzindo

// function livro(nome, ano, autor){
//   const objeto = {
//     nome: nome.toUpperCase(),
//     ano: 2025 - ano,
//     frase: nome + ' por ' + autor
//   };
//   return objeto;
// }

//Reduzindo

function livro(nome, ano, autor){
  return {
    nome: nome.toUpperCase(),
    ano: 2025 - ano,
    frase: nome + ' por ' + autor
  }
}

//Preciso retornar a função caso queira algum resultado, ou ent utilizar alguma propriedade dela.
//Criando uma variável com as propriedades que eu quero
const livroRetorno = livro('O senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno);

