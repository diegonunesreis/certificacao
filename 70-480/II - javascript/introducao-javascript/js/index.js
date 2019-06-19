document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

var paciente = document.querySelector('#primeiro-paciente');
var tdIMC = document.querySelector('.info-imc');
var peso = paciente.querySelector('.info-peso').textContent;
var altura = paciente.querySelector('.info-altura').textContent;


var imc = peso / (altura * altura);
tdIMC.textContent = imc;
