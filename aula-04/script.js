// function logCurso() {
//   const nome = 'JavaScript';
//   console.log(nome);
// }


function logCurso(nome, horas) {
  console.log(nome, horas);
  return {
    nomeTeste: nome,
    horasTeste: horas
  };
}

const bananRetorno = logCurso('Davi', '60 horas');

console.log(bananRetorno.horasTeste);