// Capturando elementos
const modal = document.querySelector("#modal-inscricao");
const btnModal = document.querySelector("#modal-fechar");

window.addEventListener("load", function(){
    setTimeout(function(){
        modal.showModal();
    }, 6000000);
});

btnModal.addEventListener("click", function(){
    modal.close();
});

modal.addEventListener("click", function(event){
    //target = alvo do evento
    if(event.target === modal) {
        modal.close();
    }
});