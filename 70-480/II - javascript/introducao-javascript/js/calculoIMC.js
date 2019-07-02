var tdIMC, tdPeso, tdAltura;
function pesoValido(peso){
    return !(peso <= 0 || peso > 1000);
}
function alturaValida(altura){
    return !(altura <= 0 || altura >= 3)
}
function calcularIMC(paciente) {
    altura = paciente.querySelector('.info-altura').textContent;
    peso = paciente.querySelector('.info-peso').textContent;
    tdIMC = paciente.querySelector('.info-imc');
    if(alturaValida(altura) && pesoValido(peso)){
        tdIMC.textContent = (peso / (altura * altura)).toFixed(2);
    } else {
        tdIMC.textContent = 'Peso e/ou altura inválidos';
        paciente.classList.add("paciente-invalido");
    }    
}