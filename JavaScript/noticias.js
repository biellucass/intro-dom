const listasNoticias = document.querySelector("#lista-noticias");

const API_KEY = "1781988774e4bee2775f3a55fe8032ed";
const URL = `https://gnews.io/api/v4/top-headlines?category=technology&lang=pt&apikey=${API_KEY}`;

// 1- criando uma função assíncrona para buscar as noticias

// Utilizamos o async para informar que a função pode demorar um pouco para carregar as informações
async function buscarNoticias() {
    try {
        const resposta = await fetch(URL);
        const dados = await resposta.json();

        dados.articles.forEach((article) => {
            //criando os elementos html
            const card = document.createElement("article");
            card.classList.add("card-noticia");

            const imagem = document.createElement("img");
            imagem.src = article.image;
            imagem.alt = article.title;

            const conteudo = document.createElement("div");

            const fonte = document.createElement("span");
            fonte.classList.add("card-fonte");
            fonte.textContent = article.source.name

            const titulo = document.createElement("h2");
            titulo.textContent = article.titulo;

            const paragrafoDescricao = document.createElement("p");
            paragrafoDescricao.textContent = article.description;

            const data = document.createElement("span");
            data.classList.add("card-data");
            data.textContent = new Date(article.publishedAt).toLocaleDateString("pt-BR");

            const link = document.createElement("a");
            link.textContent = "Ler notícia";
            link.href = article.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            conteudo.append(fonte, titulo, paragrafoDescricao, data, link);

            card.append(imagem, conteudo);

            const itemLista = document.createElement("li");
            itemLista.append(card);
            listasNoticias.append(itemLista);

        });
    } catch (error) {
        console.log(error);       
    }
}

buscarNoticias();