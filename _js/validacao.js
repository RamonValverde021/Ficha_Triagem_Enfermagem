
// Função para verificar nome e idade
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Limpar resultados anteriores
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Flags booleanas de confirmação
    var okNome, okIdade, okCPF, okSexo, okCelular, okEmail, okSintomas, okTemperatura, okPressao = false;

    // Obter valores de entrada
    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById("nascimento").value;
    const cpf = document.getElementById('cpf').value;
    const sexo = document.querySelector('input[name="sexo"]:checked'); // Seleciona o botão de rádio selecionado
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('e-mail').value;
    const sintomas = document.getElementById('sintomas').value;
    const gravidade = document.getElementById('gravidade').value;
    const temperatura = document.getElementById('temperatura').value;
    const pressao = document.getElementById('pressao_arterial').value;

    // Validar nome (deve ter pelo menos 3 letras)
    if (nome.length >= 3) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Nome válido</p>';
        okNome = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Nome inválido (mínimo 3 letras)</p>';
    }

    // Validar idade (deve estar entre 18 e 120 anos)
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    const anoNascimento = new Date(nascimento).getFullYear();
    const idade = anoAtual - anoNascimento

    if (idade >= 18 && idade <= 120) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Idade válida</p>';
        okIdade = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Idade inválida (deve ser entre 18 e 120 anos)</p>';
    }

    // Validar CPF
    if (validarCPF(cpf)) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ CPF válido</p>';
        okCPF = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ CPF inválido</p>';
    }

    // Validar Sexo
    if (sexo) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Sexo válido</p>';
        okSexo = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Sexo inválido (Marque qual é o seu sexo)</p>';
    }

    // Validar Celular
    if (celular.length == 15) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Celular válido</p>';
        okCelular = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Celular inválido</p>';
    }

    // Validar E-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ E-mail válido</p>';
        okEmail = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ E-mail inválido</p>';
    }

    // Validar Sintomas (deve ter pelo menos 5 letras e no máximo 300 letras)
    if (sintomas.length >= 5 && sintomas.length <= 300) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Sintoma válido</p>';
        okSintomas = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Sintomas inválido (mínimo 5 letras)</p>';
    }

    // Validar Gravidade
    // Não precisa porque o valor nunca fica vazio

    // Validar Temperatura
    if (temperatura > 28) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Temperatura corporal válida</p>';
        okTemperatura = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Temperatura corporal inválida</p>';
    }

    // Validar Pressão Arterial
    if (validarPressaoArterial(pressao)) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Pressão Arterial válida</p>';
        okPressao = true;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Pressão Arterial inválida</p>';
    }

    if (okNome && okIdade && okCPF && okSexo && okCelular && okEmail && okSintomas && okTemperatura && okPressao) {
        sessionStorage.setItem('NOME', nome);
        sessionStorage.setItem('IDADE', idade);
        sessionStorage.setItem('CPF', cpf);
        sessionStorage.setItem('SEXO', sexo.value);
        sessionStorage.setItem('CELULAR', celular);
        sessionStorage.setItem('EMAIL', email);
        sessionStorage.setItem('SINTOMAS', sintomas);
        sessionStorage.setItem('GRAVIDADE', gravidade);
        sessionStorage.setItem('TEMPERATURA', temperatura);
        sessionStorage.setItem('PRESSAO', pressao);
        window.location.href = "../_html/relatorio.html";
    } else {
        //alert("ACESSO NEGADO: verifique as informações");
        return;
    }
});

// Função para validar pressão arterial
function validarPressaoArterial(PA) {
    const regex = /^\d{2,3}\/\d{2,3}$/; // Formato 120/80
    if (!regex.test(PA)) return false;
    const [sistolica, diastolica] = PA.split("/").map(Number);
    return sistolica >= 90 && sistolica <= 200 && diastolica >= 60 && diastolica <= 120;
}

// Função para validar CPF
function validarCPF(cpf) {
    if(cpf.length < 14) return false;
    const strCPF = cpf.replace(/[.-]/g, ""); // Limpa o cpf

    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

// Função que incrementa automaticamente os campos
function autoincremento(dado, tipo) {
    var valor = dado.value;
    if (isNaN(valor[valor.length - 1])) {
        dado.value = valor.substring(0, valor.length - 1);
        return;
    }
    if (tipo == "CPF") {
        dado.setAttribute("maxlength", "14");
        if (valor.length == 3 || valor.length == 7) dado.value += ".";
        if (valor.length == 11) dado.value += "-";
    }
    if (tipo == "CEL") {
        dado.setAttribute("maxlength", "15");
        if (valor.length == 1) dado.value = "(" + valor;
        if (valor.length == 3) dado.value += ") ";
        if (valor.length == 10) dado.value += "-";
    }
}