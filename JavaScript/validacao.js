
// Função para verificar nome e idade
function verificarCadastro() {
    // Limpar resultados anteriores
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Obter valores de entrada
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const sintomas = document.getElementById('sintomas').value;

    // Validar nome (deve ter pelo menos 3 letras)
    if (nome.length >= 3) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Nome válido</p>';
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Nome inválido (mínimo 3 letras)</p>';
    }

    // Validar idade (deve estar entre 18 e 120 anos)
    if (idade >= 18 && idade <= 120) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Idade válida</p>';
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Idade inválida (deve ser entre 18 e 120 anos)</p>';
    }

    // Validar CPF
    if (cpf.length == 14) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ CPF válido</p>';
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ CPF inválido (mínimo 3 letras)</p>';
    }

    // Validar Sintomas (deve ter pelo menos 5 letras e no máximo 100 letras)
    if (sintomas.length >= 5 && sintomas.length <= 200) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Sintoma válido</p>';
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Sintomas inválido (mínimo 5 letras)</p>';
    }

    if ((nome.length >= 3) && (idade >= 18 && idade <= 120) && (cpf.length == 14) && (sintomas.length >= 5 && sintomas.length <= 100)) {
        sessionStorage.setItem('NOME', nome);
        sessionStorage.setItem('IDADE', idade);
        sessionStorage.setItem('CPF', cpf);
        sessionStorage.setItem('SINTOMAS', sintomas);
        window.location.href = "relatorio.html";
    } else {
        //alert("ACESSO NEGADO: verifique as informações");
    }
}

// Função que incrementa automaticamente os campos
function autoincremento(dado, tipo) {
    var valor = dado.value;
    if (isNaN(valor[valor.length - 1])) {
        dado.value = valor.substring(0, valor.length - 1);
        return;
    }
    if (tipo == 'CPF') {
        dado.setAttribute("maxlength", "14");
        if (valor.length == 3 || valor.length == 7) dado.value += ".";
        if (valor.length == 11) dado.value += "-";
    }
}