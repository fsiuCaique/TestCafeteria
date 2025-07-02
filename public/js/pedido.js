/*document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("pedido");
  if (!select) return;

  fetch("data/produtos.json")
    .then(response => response.json())
    .then(produtos => {
      produtos.forEach(produto => {
        const opt = document.createElement("option");
        opt.value = produto.nome;
        opt.textContent = `${produto.nome} - R$ ${produto.preco}`;
        select.appendChild(opt);
      });
    });
});  

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagem = document.getElementById("mensagemEnviada");
    mensagem.innerText = "Mensagem enviada com sucesso!";
    mensagem.style.color = "green";
    this.reset();
});


// Aguarda o carregamento total da página HTML
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o elemento <select> onde os itens do cardápio serão adicionados
  const select = document.getElementById("pedido");

  // Faz a requisição ao arquivo produtos.json para obter os dados
  fetch("../data/produtos.json") 
    .then(resposta => resposta.json())
    .then(produtos => {
      // Para cada produto recebido, cria uma <option> no <select>
      produtos.forEach(produtos => {
        const option = document.createElement("option");
        option.value = produto.nome; // Será o valor enviado no formulário
        option.textContent = `${produto.nome} - R$ ${produto.preco}`; // Aparece na tela
        select.appendChild(option); // Insere no HTML

        console.log("Produtos carregados:", produto); // Envia mensagem dos produtos para conferir
      });
    });

  // Seleciona o formulário e o espaço onde a mensagem será exibida
  const formulario = document.getElementById("formulario-pedido");
  const resposta = document.getElementById("resposta");

  //Intercepta o envio do formulário
  formulario.addEventListener("submit", () => {
    // Exibe mensagem na tela após envio
    
    resposta.innerHTML = `<p class="mensagem-ok">✅ Pedido enviado! Obrigado por escolher a Cafeteira Sabor & Aroma ☕</p>`;

  });
});
/*/

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o elemento <select> onde os produtos serão inseridos
  const select = document.getElementById("pedido");

  // Carrega os dados do JSON com os produtos
  fetch("../data/produtos.json")
    .then((resposta) => resposta.json())
    .then((produtos) => {
      console.log("Produtos carregados:", produtos); // debug
      produtos.forEach((produto) => {
        const option = document.createElement("option");
        option.value = produto.nome;
        option.textContent = `${produto.nome} - R$ ${produto.preco}`;
        select.appendChild(option);
      });
    })
    .catch((erro) => {
      console.error("Erro ao carregar produtos:", erro);
    });

  // Seleciona o formulário e o local da mensagem de confirmação
  const formulario = document.getElementById("formulario-pedido");
  const resposta = document.getElementById("resposta");

  // Ao enviar o formulário, exibe a mensagem personalizada
  formulario.addEventListener("submit", () => {
    resposta.innerHTML = `
      <p class="mensagem-ok">✅ Pedido enviado! Obrigado por escolher a Cafeteria Sabor & Aroma ☕</p>
    `;
  });
});