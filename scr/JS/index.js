const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

function alternaModal(){
    modal.classList.toggle("aberto");
}

// ABRIR MODAL
botaoTrailer.addEventListener("click", () => {    
    alternaModal();
    modal.classList.setAttribute("scr", "https://www.youtube.com/embed/Cb4WV4aXBpk");
});

//  FECHAR MODAL

botaoFecharModal.addEventListener("click", () => {    
    alternaModal();
    video.setAttribute("src","");
});


