function adicionarPaciente(nome, peso, altura, gordura){
    var tbPacientes = document.querySelector('#tabela-pacientes');
    var trPaciente = document.createElement('tr');
    trPaciente.classList.add('paciente');
    
    var tdNome = document.createElement('td');
    var tdPeso = document.createElement('td');
    var tdAltura = document.createElement('td');
    var tdGordura = document.createElement('td');
    var tdIMC = document.createElement('td');

    tdNome.textContent = nome;
    tdNome.classList.add('info-nome');
    
    tdPeso.textContent = peso;
    tdPeso.classList.add('info-peso');

    tdAltura.textContent = altura;
    tdAltura.classList.add('info-altura');

    tdGordura.textContent = gordura;
    tdGordura.classList.add('info-gordura');

    tdIMC.classList.add('info-imc');

    trPaciente.appendChild(tdNome);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);
    trPaciente.appendChild(tdIMC);

    tbPacientes.appendChild(trPaciente);
    calcularIMC(trPaciente);
}