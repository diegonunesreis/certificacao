document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');
var btoAdicionar = document.querySelector('#adicionar-paciente');

pacientes.forEach(paciente => {
    calcularIMC(paciente);
});

btoAdicionar.addEventListener('click', function(){
    var tdNome = document.querySelector('#nome');
    var tdPeso = document.querySelector('#peso');
    var tdAltura = document.querySelector('#altura');
    var tdGordura = document.querySelector('#gordura');
    adicionarPaciente(tdNome.value, 
        tdPeso.value,
        tdAltura.value,
        tdGordura.value);
});
