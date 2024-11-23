// Flags booleanas de confirmação
let okNome, okIdade, okCPF, okSexo, okCelular, okEmail, okSintomas, okTemperatura, okPressao = false;

// Inicias os dados recebidos do formulario globalmente
let nome, nascimento, cpf, sexo, celular, email, sintomas, temperatura, pressao, idade;

// Preenche automaticamente os dados do paciente de registro
window.onload = function () {
    if (sessionStorage.getItem('NOME') != null) {
        nome = sessionStorage.getItem('NOME');
        document.getElementById("nome").value = nome;
        okNome = true;
        let feedback = document.getElementById('nome_feedback');
        feedback.innerText = '✔️ Nome válido';
        feedback.className = "pass";
    }

    if (sessionStorage.getItem('CPF') != null) {
        cpf = sessionStorage.getItem('CPF');
        document.getElementById("cpf").value = cpf;
        okCPF = true;
        let feedback = document.getElementById('cpf_feedback');
        feedback.innerText = '✔️ CPF válido';
        feedback.className = "pass";
    }

    if (sessionStorage.getItem('NASCIMENTO') != null) {
        document.getElementById("nascimento").value = sessionStorage.getItem('NASCIMENTO');
        nascimento = sessionStorage.getItem('NASCIMENTO');
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        const anoNascimento = new Date(nascimento).getFullYear();
        idade = anoAtual - anoNascimento;
        let feedback = document.getElementById('nascimento_feedback');
        if (idade >= 18 && idade <= 120) {
            feedback.innerText = '✔️ Idade válida';
            feedback.className = "pass";
            okIdade = true;
        } else {
            feedback.innerText = '❌ Idade inválida (deve ser entre 18 e 120 anos)';
            feedback.className = "fail";
            okCPF = false;
        }
    }

    if (sessionStorage.getItem('CELULAR') != null) {
        celular = sessionStorage.getItem('CELULAR');
        document.getElementById("celular").value = celular;
        okCelular = true;
        let feedback = document.getElementById('celular_feedback');
        feedback.innerText = '✔️ Celular válido';
        feedback.className = "pass";
        okCelular = true;
    }

    if (sessionStorage.getItem('EMAIL') != null) {
        email = sessionStorage.getItem('EMAIL');
        document.getElementById("e-mail").value = email;
        okEmail = true;
        let feedback = document.getElementById('email_feedback');
        feedback.innerText = '✔️ E-mail válido';
        feedback.className = "pass";
        okEmail = true;
    }

    if (sessionStorage.getItem('SEXO')) {
        if (sessionStorage.getItem('SEXO') == 'Masculino') {
            document.getElementById("masculino").checked = true;
        } else {
            document.getElementById("feminino").checked = true;
        }
        sexo = sessionStorage.getItem('SEXO');
        okSexo = true;
    }
}

// Validar nome (deve ter pelo menos 3 letras)
document.getElementById("nome").addEventListener("input", function () {
    nome = document.getElementById('nome').value;
    let feedback = document.getElementById('nome_feedback');
    if (nome.length >= 3) {
        feedback.innerText = '✔️ Nome válido';
        feedback.className = "pass";
        okNome = true;
    } else {
        feedback.innerText = '❌ Nome inválido (mínimo 3 letras)';
        feedback.className = "fail";
        okCPF = false;
    }
});

// Validar idade (deve estar entre 18 e 120 anos)
document.getElementById("nascimento").addEventListener("input", function () {
    nascimento = document.getElementById("nascimento").value;
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    const anoNascimento = new Date(nascimento).getFullYear();
    idade = anoAtual - anoNascimento;
    let feedback = document.getElementById('nascimento_feedback');
    if (idade >= 18 && idade <= 120) {
        feedback.innerText = '✔️ Idade válida';
        feedback.className = "pass";
        okIdade = true;
    } else {
        feedback.innerText = '❌ Idade inválida (deve ser entre 18 e 120 anos)';
        feedback.className = "fail";
        okCPF = false;
    }
});

// Validar CPF
document.getElementById('cpf').addEventListener("input", function () {
    cpf = document.getElementById('cpf').value;
    let feedback = document.getElementById('cpf_feedback');
    if (validarCPF(cpf)) {
        feedback.innerText = '✔️ CPF válido';
        feedback.className = "pass";
        okCPF = true;
    } else {
        feedback.innerText = '❌ CPF inválido';
        feedback.className = "fail";
        okCPF = false;
    }
});
// Função para validar código CPF
function validarCPF(cpf) {
    if (cpf.length < 14) return false;
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

// Validar Celular
document.getElementById('celular').addEventListener("input", function () {
    celular = document.getElementById('celular').value;
    let feedback = document.getElementById('celular_feedback');
    if (celular.length == 15) {
        feedback.innerText = '✔️ Celular válido';
        feedback.className = "pass";
        okCelular = true;
    } else {
        feedback.innerText = '❌ Celular inválido';
        feedback.className = "fail";
        okCelular = false;
    }
});

// Validar E-mail
document.getElementById('e-mail').addEventListener("input", function () {
    email = document.getElementById('e-mail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let feedback = document.getElementById('email_feedback');
    if (emailPattern.test(email)) {
        feedback.innerText = '✔️ E-mail válido';
        feedback.className = "pass";
        okEmail = true;
    } else {
        feedback.innerText = '❌ E-mail inválido';
        feedback.className = "fail";
        okEmail = false;
    }
});

// Validar Sintomas (deve ter pelo menos 5 letras e no máximo 300 letras)
document.getElementById('sintomas').addEventListener("input", function () {
    sintomas = document.getElementById('sintomas').value;
    let feedback = document.getElementById('sintomas_feedback');
    if (sintomas.length >= 5 && sintomas.length <= 300) {
        feedback.innerText = '✔️ Sintoma válido';
        feedback.className = "pass";
        okSintomas = true;
    } else {
        feedback.innerText = '❌ Sintomas inválido (mínimo 5 letras)';
        feedback.className = "fail";
        okSintomas = false;
    }
});

// Validar Temperatura
document.getElementById('temperatura').addEventListener("input", function () {
    temperatura = document.getElementById('temperatura').value;
    let feedback = document.getElementById('temperatura_feedback');
    if (temperatura > 28) {
        feedback.innerText = '✔️ Temperatura corporal válida';
        feedback.className = "pass";
        okTemperatura = true;
    } else {
        feedback.innerText = '❌ Temperatura corporal inválida';
        feedback.className = "fail";
        okTemperatura = false;
    }
});

// Validar Pressão Arterial
document.getElementById('pressao_arterial').addEventListener("input", function () {
    pressao = document.getElementById('pressao_arterial').value;
    let feedback = document.getElementById('pressao_feedback');
    if (validarPressaoArterial(pressao)) {
        feedback.innerText = '✔️ Pressão Arterial válida';
        feedback.className = "pass";
        okPressao = true;
    } else {
        feedback.innerText = '❌ Pressão Arterial inválida';
        feedback.className = "fail";
        okPressao = false;
    }
});
// Função para validar digitos da pressão arterial
function validarPressaoArterial(PA) {
    const regex = /^\d{2,3}\/\d{2,3}$/; // Formato 120/80
    if (!regex.test(PA)) return false;
    const [sistolica, diastolica] = PA.split("/").map(Number);
    return sistolica >= 90 && sistolica <= 200 && diastolica >= 60 && diastolica <= 120;
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

// Função que verifica se está tudo ok e envia o relatorio
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Validar Sexo
    sexo = document.querySelector('input[name="sexo"]:checked'); // Seleciona o botão de rádio selecionado
    if (sexo) {
        okSexo = true;
    } else {
        okSexo = false;
    }

    // Pegar dados da gravidade da situação
    const gravidade = document.getElementById('gravidade').value;

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