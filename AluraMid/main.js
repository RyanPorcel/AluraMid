function tocasom (SeletorAudio) {
  const elemento = document.querySelector(SeletorAudio);
 
  if (elemento && elemento.localName === 'audio') {
    console.play();
  }
 
 else{
  console.log('Elemento não encontradoou seletor invalido');
 }
  
 

}


const listadeTeclas = document.querySelectorAll ('tecla');
 
for (let contador = 0; contador < listadeTeclas.length; contador++){

const tecla = listadeTeclas[contador];
const instrumento = tecla.classlist[1];
const idAudio = `#som_${instrumento}`;

tecla.onclick = function( ){
  tocaSom(idAudio);
}

tecla.onkeydown = function (evento) {
   if (evento.code === 'Space' || evento.code === 'Enter' ) {
  
    tecla.classlist.add('ativa');
  }
}
 
tecla.onkeyup = function( ) {
  tecla.classlist.remove('ativa');
}



}
