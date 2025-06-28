document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagem = document.getElementById("mensagemEnviada");
    mensagem.innerText = "Mensagem enviada com sucesso!";
    mensagem.style.color = "green";
    this.reset();
});
