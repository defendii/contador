const inputTexto = document.querySelector("[input-texto]");
const divContador = document.querySelector("[txt-contador]");
const btnContar = document.querySelector("[btn-contar]");

let modo = "caracteres"

function handleImputTexto(evento){
   let tamanho = inputTexto.value.length
   console.log(tamanho) 

}

function handleBtnContar(evento){
    console.log("click contar")
    if (modo === "caracteres"){
        modo = "palavras "
        btnContar.innerHTML = "Contar Palavras"
    } else{
        modo = "caracteres"
        btnContar.innerHTML = "Contar Caracteres"
    }

}

inputTexto.addEventListener("input", handleImputTexto)
btnContar.addEventListener("click", handleBtnContar)