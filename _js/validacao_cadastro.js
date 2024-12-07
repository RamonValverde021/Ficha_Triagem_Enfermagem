// Flags booleanas de confirmação
let okNome, okIdade, okCPF, okSexo, okCelular, okEmail, okCEP, okEndereco = false;

// Inicias os dados recebidos do formulario globalmente
let nome, nascimento, cpf, sexo, celular, email, cep, endereco, idade;

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
        okNome = false;
    }
});

// Validar idade
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
        okIdade = false;
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

// Validar Sexo

// Adiciona um event listener para ouvir as mudanças nos radio buttons
const radios = document.querySelectorAll('input[name="sexo"]');
radios.forEach(radio => {
    radio.addEventListener('change', mostrarMensagem);
});

// Função para exibir a mensagem com base na seleção
function mostrarMensagem() {
    sexo = document.querySelector('input[name="sexo"]:checked'); // Seleciona o botão de rádio selecionado
    // Obtém todos os inputs do tipo "radio" com o nome 'sexo'
    const radios = document.querySelectorAll('input[name="sexo"]');
    // Itera sobre os radios para verificar qual foi marcado
    radios.forEach(radio => {
        if (radio.checked) {
            const mensagem = radio.value;
            let feedback = document.getElementById('sexo_feedback');
            if (mensagem === 'Masculino' || mensagem === 'Feminino') {
                feedback.innerText = '✔️ Sexo válido';
                feedback.className = "pass";
                okSexo = true;
            } else {
                feedback.innerText = '❌ Sexo inválido';
                feedback.className = "fail";
                okSexo = false;
            }
        }
    });
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

// Validar endereço
document.getElementById("endereco").addEventListener("input", function () {
    endereco = document.getElementById('endereco').value;
    let feedback = document.getElementById('endereco_feedback');
    if (endereco.length >= 10) {
        feedback.innerText = '✔️ Endereço válido';
        feedback.className = "pass";
        okEndereco = true;
    } else {
        feedback.innerText = '❌ Endereço inválido';
        feedback.className = "fail";
        okEndereco = false;
    }
});

// Validar CEP
document.getElementById('cep').addEventListener("input", function () {
    cep = document.getElementById('cep').value;
    let feedback = document.getElementById('cep_feedback');
    if (cep.length == 9) {
        feedback.innerText = '✔️ CEP válido';
        feedback.className = "pass";
        okCEP = true;
    } else {
        feedback.innerText = '❌ CEP inválido';
        feedback.className = "fail";
        okCEP = false;
    }
});


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
    if (tipo == "CEP") {
        dado.setAttribute("maxlength", "9");
        if (valor.length == 5) dado.value += "-";
    }
}

// Função que verifica se está tudo ok e envia o relatorio
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    if (okNome && okIdade && okCPF && okSexo && okCelular && okEmail && okCEP && okEndereco) {
        sessionStorage.setItem('NOME', nome);
        sessionStorage.setItem('NASCIMENTO', nascimento);
        sessionStorage.setItem('CPF', cpf);
        sessionStorage.setItem('SEXO', sexo.value);
        sessionStorage.setItem('CELULAR', celular);
        sessionStorage.setItem('EMAIL', email);

        document.getElementById('mensagem_sucesso').style.display = 'block';
        document.getElementById('mensagem_sucesso').scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function () {
            window.location.href = "_html/formulario_triagem.html";
        }, 2000);

    } else {
        //alert("ACESSO NEGADO: verifique as informações");
        return;
    }
});