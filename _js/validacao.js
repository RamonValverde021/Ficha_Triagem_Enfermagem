
// Função para verificar nome e idade
function verificarCadastro() {
    /*
    // Limpar resultados anteriores
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Flags booleanas de confirmação
    var okNome, okNascimento, okCPF, okSexo, okCelular, okEmail, okSintomas, okGravidade, okTemperatura, okPressao = False;

    // Obter valores de entrada
    const nome = document.getElementById('nome').value;
    const nascimento = document.querySelector('nascimento').valueAsDate;
    const cpf = document.getElementById('cpf').value;
    const sexo = document.forms["form"]["sexo"].value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('e-mail').value;
    const sintomas = document.getElementById('sintomas').value;
    const gravidade = document.getElementById('gravidade').value;
    const temperatura = document.getElementById('temperatura').value;
    const pressao = document.getElementById('pressao').value;

    // Validar nome (deve ter pelo menos 3 letras)
    if (nome.length >= 3) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Nome válido</p>';
        okNome = True;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Nome inválido (mínimo 3 letras)</p>';
    }
*/
    // Validar idade (deve estar entre 18 e 120 anos)
    const date = new Date();
    const anoAtual = date.getFullYear();
    const nascimento = document.querySelector('nascimento').valueAsDate;
    var dia = nascimento.getUTCDate();
    var mes = nascimento.getUTCMonth() + 1; // meses iniciam com o valor 0 ¯\_(ツ)_/¯
    var ano = nascimento.getUTCFullYear();
    console.log(ano);
  
   /*

    if (idade >= 18 && idade <= 120) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Idade válida</p>';
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Idade inválida (deve ser entre 18 e 120 anos)</p>';
    }

    // Validar CPF
    if (cpf.length == 14) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ CPF válido</p>';
        okCPF = True;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ CPF inválido (mínimo 3 letras)</p>';
    }

    // Validar Sintomas (deve ter pelo menos 5 letras e no máximo 300 letras)
    if (sintomas.length >= 5 && sintomas.length <= 300) {
        resultadosDiv.innerHTML += '<p class="pass">✔️ Sintoma válido</p>';
        okSintomas = True;
    } else {
        resultadosDiv.innerHTML += '<p class="fail">❌ Sintomas inválido (mínimo 5 letras)</p>';
    }

    if (okNome && okNascimento && okCPF && okSexo && okCelular && okEmail && okSintomas && okGravidade && okTemperatura && okPressao) {
        sessionStorage.setItem('NOME', nome);
        sessionStorage.setItem('IDADE', idade);
        sessionStorage.setItem('CPF', cpf);
        sessionStorage.setItem('SINTOMAS', sintomas);
        window.location.href = "../_html/relatorio.html";
    } else {
        //alert("ACESSO NEGADO: verifique as informações");
    }
    */
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