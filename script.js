function devuelveTextoDeAlerta() {
  return "Alerta";
}

function Desaparece(nombre) {
	let elems = document.getElementsByClassName(nombre);
  for(let i = 0; i < elems.length; i++){
    if(elems[i].style.visibility==='hidden'){
      elems[i].style.visibility ='visible';
    }
    else elems[i].style.visibility ='hidden';
  }
}

function CambiaColor(nombre){
  let elems = document.getElementsByClassName(nombre);
  for(let i = 0; i < elems.length; i++){
    elems[i].style.color = "#" + HexAleatorio();
  }
}

function HexAleatorio(){ //Saca un hexadecimal de 6 digitos aleatorio
  let letras = "0123456789ABCDEF"
  let num = "";

  for(let i = 0; i < 6; i++){
    num += letras[Math.floor(Math.random() * 16)]
  }

  return num
}
