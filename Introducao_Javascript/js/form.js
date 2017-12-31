var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event){
   event.preventDefault(); //Previne o comportamento padrão

   var form = document.querySelector('#form-adiciona');
   //Extraindo informações do paciente do form. 
   var paciente = obtemPacienteDoFormulario(form);


   var erros = validaPaciente(paciente);
 
   if(erros.length > 0) {
       exibeMensagemDeErro(erros);
       return;
   }

   adicionaPacienteNaTabela(paciente)
   //limpa os campos
   form.reset();
   var mensagensErro = document.querySelector("#mensagens-erro");
   mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
   var pacienteTr  = montaTr(paciente); 
   var tabela = document.querySelector('#tabela-pacientes');
   tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
 
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = [];
    
    if(paciente.nome.length == 0) erros.push("O campo nome é obrigatório");
    
    if(paciente.peso.length == 0) erros.push("O campo peso é obrigatório"); 

    if(paciente.altura.length == 0) erros.push("O campo altura é obrigatório");
    
    if(paciente.gordura.length == 0) erros.push("O campo gordura é obrigatório"); 



    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    return erros;
}