function abrirModal() {
    document.getElementById("formularioModal").style.display = "block";
}

function fecharModal() {
    document.getElementById("formularioModal").style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("formularioModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Envir o formulário ed mostrar a mensagem de agradecimento
function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio real do formulário, se nescessário

    //Exibir a mensagem de agradecimento
    document.getElementById("mensagemagradecimento").style.display = "block";
    document.getElementById("formularioModal").style.display ="none"; // Fecha o modal
}