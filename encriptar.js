function llaveDeEncriptacion(letra){
    switch (letra) {
        case 'a': letra='ai';
            break;
        case 'e': letra='enter';
            break;
        case 'i': letra='imes';
            break;
        case 'o': letra='ober';
            break;
        case 'u': letra='ufat';
            break;
        default: break;
    }
    return letra;
}
function llaveDeDesencriptacion(letra){
    switch (letra) {
        case 'ai': letra='a';
            break;
        case 'enter': letra='e';
            break;
        case 'imes': letra='i';
            break;
        case 'ober': letra='o';
            break;
        case 'ufat': letra='u';
            break;
        default: break;
    }
    return letra;
}

function encriptarTexto(mensaje) {
    let expReg=/(a|e|i|o|u)/g;
    let nuevoTexto=mensaje.replace(expReg,(letra)=>{
        return llaveDeEncriptacion(letra);
    })
    return nuevoTexto;
}

function desencriptarTexto(mensaje) {
    let expReg=/(ai|enter|imes|ober|ufat)/g;
    let nuevoTexto=mensaje.replace(expReg,(letra)=>{
        return llaveDeDesencriptacion(letra);
    })
    return nuevoTexto;
}

function copiarTexto(){
    let copiado=document.getElementById('outputTextoTexarea').value;
    let boton=document.getElementById('copiar');
    
    navigator.clipboard.writeText(copiado);
    boton.textContent="Copiado";
}

let boton=document.getElementById('copiar');
let textArea=document.getElementById('outputTextoTexarea');

document.getElementById('encriptarBtn').addEventListener('click', () => {
    document.getElementById('muñeco').style.display="none";
    document.getElementById('outputTexto').style.display="none";
    boton.style.display="inline-block";
    textArea.style.display="block";
    document.getElementById('output-section').style.justifyContent="space-between"

    let texto = document.getElementById('inputTexto').value;
    let textoEncriptado = encriptarTexto(texto);
    boton.textContent="Copiar";
    textArea.textContent=textoEncriptado;
    console.log(textoEncriptado)
});

document.getElementById('desencriptarBtn').addEventListener('click', () => {
    
    let texto = document.getElementById('inputTexto').value;
    let textoDesencriptado = desencriptarTexto(texto);
    boton.textContent="Copiar";
    textArea.textContent = textoDesencriptado;
    console.log(textoDesencriptado);
});

