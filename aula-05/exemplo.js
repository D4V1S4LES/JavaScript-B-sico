// const ativar = document.querySelector('.ativar');

// function ativarClick(event){
//   console.log(event.currentTarget);
// }

// ativar.addEventListener('click', ativarClick);
// console.log(ativar);

const botao = document.querySelector('.botao');

//Estou criando uma função mostrar() estou selecionando o elemento HTMl da classe .texto Estou utilizando o objeto classList e o método toggle para adicionar a classe 'ativar' ao elemento selecionado no caso o .texto. Além disso eu estou retornando no botão o evento de click para a classe .mostrar
function mostrar() {
  const texto = document.querySelector('.texto');
  texto.classList.toggle("ativar");
}

//aqui eu passo o evento que eu quero e a função
botao.addEventListener('click', mostrar);