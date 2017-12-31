var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    //Buscando os elementos
    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');

    // Pegando o conteúdo de texto dos elementos e atribuindo as variáveis. 
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // Validação 
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        // Calculando o IMC.
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
  }


  function validaPeso(peso) {
    if(peso < 1000 && peso >= 0) {
        return true;
    }else{
        return false;
    }
  }

  function validaAltura(altura) {
    if(altura <= 3.0 && altura >= 0) {
        return true;
    }else{
        return false;
    }
  }
 
function calculaImc(peso, altura) {
    var imc = 0; 
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
