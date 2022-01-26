
var texto1 = document.querySelector("#input-texto");
var mensaje1= document.querySelector("#msg");

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    encriptarTexto()});

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    desencriptarTexto()});
    
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    mensaje1.focus();
    mensaje1.select();
    var texto2= mensaje1.value;
    navigator.clipboard.writeText(texto2)});


function encriptarTexto () {

    mensaje1.value = texto1.value
           .replace(/e/gi,"enter")
           .replace(/i/gi,"imes")
           .replace(/a/gi,"ai")
           .replace(/o/gi,"ober")
           .replace(/u/gi,"ufat"); 
        
    var caracteresIncorrectos = /[A-ZáéíóúÁÉÍÓÚ]/;
    if (caracteresIncorrectos.test(texto1.value)){
        alert("Ingresó caracteres incorrectos.")
        mensaje1.value="";}
            
    texto1.value="";}

function desencriptarTexto() {

    mensaje1.value = texto1.value
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u"); }