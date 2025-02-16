const larguraDaTela = window.innerHeight;

function cordenadaMouse(event){
  const cordenadas = {
    x: event.x,
    y: event.y
  }
  console.log(cordenadas);
}

// window.addEventListener('mousemove', cordenadaMouse);

function scroll(){
  console.log(window.scrollY);
}

window.addEventListener('scroll', scroll);