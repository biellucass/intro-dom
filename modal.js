// Capturando elementos
const modal = document.querySelector("#modal-inscricao");
const btnModal = document.querySelector("#modal-fechar");

btnModal.addEventListener("click", function(){
    modal.close();
});

modal.showModal();