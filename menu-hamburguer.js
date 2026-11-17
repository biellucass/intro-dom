// 1 - Capturando elementos
const botaoMenu = document.getElementById("menu-toggle");
const listaMenu = document.getElementById("menu");

// 2 - Configurando evento/ação
botaoMenu.addEventListener("click", function(){
    //lógica a ser desenvolvida

    listaMenu.classList.toggle("ativo");

})

