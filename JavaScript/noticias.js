const listasNoticias = document.querySelector("#lista-noticias");

const API_KEY = "1781988774e4bee2775f3a55fe8032ed";
const URL = `https://gnews.io/api/v4/top-headlines?category=technology&lang=pt&apikey=${API_KEY}`

// 1- criando uma função assíncrona para buscar as noticias

// Utilizamos o async para informar que a função pode demorar um pouco para carregar as informações
async function buscarNoticias() {
    try {
        const resposta = await fetch(URL);

        const dados = await resposta.json();

        console.log(dados.articles);
        console.log(resposta);
    } catch (error) {
        console.log("Error")
        
    }
}

buscarNoticias();