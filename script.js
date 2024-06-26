const inputTexto = document.querySelector("[input-texto]");
const divContador = document.querySelector("[txt-contador]");
const btnContar = document.querySelector("[btn-contar]");

let modo = "caracteres"

function handleImputTexto(evento){
   let tamanho = inputTexto.value.length
   if (modo == "caracteres"){
    if (tamanho == 1){
        divContador.innerHTML = tamanho + " caractere" 
       } else {
        divContador.innerHTML = tamanho + " caracteres" 
       }
   } else{
    let qtdepalavras = inputTexto.value.split(" ").length
    if (qtdepalavras == 1){
        divContador.innerHTML = qtdepalavras + " palavra" 
       } else {
        divContador.innerHTML = qtdepalavras + " palavras" 
       }
   }
}

function handleBtnContar(evento){
    console.log("click contar")
    if (modo === "caracteres"){
        modo = "palavras"
        btnContar.innerHTML = "Contar Caracteres"
    } else{
        modo = "caracteres"
        btnContar.innerHTML = "Contar Palavras"
    }

}

inputTexto.addEventListener("input", handleImputTexto)
btnContar.addEventListener("click", handleBtnContar)