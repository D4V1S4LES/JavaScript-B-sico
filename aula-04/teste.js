//parâmetro são varíaveis de uma função basicamente
//Método é uma função dentro de um objeto. ai você chama primeiro um obejto e depois a função = console.log
//propriedade é uma variável dentro de um objeto

//Função do tipo construtor que recebe 3 parâmetros e possuí um método para a propriedade nome.toUpperCase()
function livro(nome, ano, autor){
  return {
    nome: nome.toUpperCase(),
    ano: 2025 - ano,
    frase: nome + ' por ' + autor
  }
}

const livroVeio = livro('jorge', 2005, 'Teeu pai');
console.log(livroVeio.nome);