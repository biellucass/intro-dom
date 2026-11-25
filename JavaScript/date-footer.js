const anoAtual = document.querySelector("#ano-atual");

const data = new Date();
const ano = data.getFullYear;

anoAtual.textContent = ano;

