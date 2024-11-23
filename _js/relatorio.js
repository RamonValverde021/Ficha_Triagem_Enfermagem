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
<label>Gravidade da Situação: </label><p id="gravidade_txt" class="relatorio"> ${_gravidade}</p><br>
<label>Nome: </label><p class="relatorio"> ${_nome}</p><br>
<label>Idade: </label><p class="relatorio"> ${_idade} anos</p> <br>
<label>CPF: </label><p class="relatorio"> ${_cpf}</p><br>
<label>Sexo: </label><p class="relatorio"> ${_sexo}</p><br>
<label>Celular: </label><p class="relatorio"> ${_celular}</p><br>
<label>E-Mail: </label><p class="relatorio"> ${_email}</p><br>
<label>Temperatura Corporal: </label><p class="relatorio"> ${_temperatura} °C</p><br>
<label>Pressão Arterial: </label><p class="relatorio"> ${_pressao} mmHg</p><br>
<label>Sintomas: </label><p class="relatorio"> ${_sintomas}</p><br>
<label>Possivel Diagnostico: </label><p class="relatorio"> ${_diagnostico}</p>
`;

if (_gravidade == "Não Urgente") {
    document.getElementById("gravidade_txt").style.background = "DodgerBlue";
} else if (_gravidade == "Pouco Urgente") {
    document.getElementById("gravidade_txt").style.background = "green";
} else if (_gravidade == "Urgente") {
    document.getElementById("gravidade_txt").style.background = "yellow";
} else if (_gravidade == "Muito Urgente") {
    document.getElementById("gravidade_txt").style.background = "orange";
} else if (_gravidade == "Emergente") {
    document.getElementById("gravidade_txt").style.background = "red";
    document.getElementById("gravidade_txt").style.color = "white";
    document.getElementById("gravidade_txt").style.fontWeight = "bold";
} else {
    document.getElementById("gravidade_txt").style.background = "black";
    document.getElementById("gravidade_txt").style.color = "white";
}