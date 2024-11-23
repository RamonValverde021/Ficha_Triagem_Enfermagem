const _nome = sessionStorage.getItem('NOME');
const _idade = sessionStorage.getItem('IDADE');
const _cpf = sessionStorage.getItem('CPF');
const _sexo = sessionStorage.getItem('SEXO');
const _celular = sessionStorage.getItem('CELULAR');
const _email = sessionStorage.getItem('EMAIL');
const _sintomas = sessionStorage.getItem('SINTOMAS');
const _gravidade = sessionStorage.getItem('GRAVIDADE');
const _temperatura = sessionStorage.getItem('TEMPERATURA');
const _pressao = sessionStorage.getItem('PRESSAO');

const _diagnostico = "Olhando no ChatGPT";

document.getElementById('relatorio_final').innerHTML = `
<p><label>Nome: </label> ${_nome}</p><br>
<p><label>Idade: </label> ${_idade} anos</p> <br>
<p><label>CPF: </label> ${_cpf}</p><br>
<p><label>Sexo: </label> ${_sexo}</p><br>
<p><label>Celular: </label> ${_celular}</p><br>
<p><label>E-Mail: </label> ${_email}</p><br>
<p><label>Sintomas: </label> ${_sintomas}</p><br>
<p id="gravidade_txt"><label>Gravidade da Situação: </label> ${_gravidade}</p><br>
<p><label>Temperatura Corporal: </label> ${_temperatura} °C</p><br>
<p><label>Pressão Arterial: </label> ${_pressao} mmHg</p><br>
<p><label>Celular: </label> ${_celular}</p><br>

<p><label>Possivel Diagnostico: </label> ${_diagnostico}</p>
`;

if (_gravidade == "Não Urgente") {
    document.getElementById("gravidade_txt").style.background = "DodgerBlue";
    document.getElementById("gravidade_txt").style.color = "white";
} else if (_gravidade == "Pouco Urgente") {
    document.getElementById("gravidade_txt").style.background = "green";
} else if (_gravidade == "Urgente") {
    document.getElementById("gravidade_txt").style.background = "yellow";
    document.getElementById("gravidade_txt").style.color = "white";
} else if (_gravidade == "Muito Urgente") {
    document.getElementById("gravidade_txt").style.background = "orange";
} else if (_gravidade == "Emergente") {
    document.getElementById("gravidade_txt").style.background = "red";
    document.getElementById("gravidade_txt").style.color = "white";
    document.getElementById("gravidade_txt").style.fontWeight = "bold";
} else {
    document.getElementById("gravidade_txt").style.background = "black";
}