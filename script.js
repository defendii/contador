const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")

let modo = "caracteres"

function handleInputTexto(){
    console.log(inputTexto.value)

    if (modo === "caracteres"){

    } else{

    }
}

function handleBtnContar(){
    console.log("click Contar")
    if (modo === "caracteres"){
        modo = "palavras"
        btnContar.innerText = "Contar Caracteres"
    } else {
        modo = "caracteres"
        btnContar.innerText = "Contar Palavras"
    }
}

inputTexto.addEventListener("input", handleInputTexto)

btnContar.addEventListener("click", handleBtnContar)