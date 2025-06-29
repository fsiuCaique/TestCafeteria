let currentIndex = 0;
let totalItems = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetch('data/cafeteria.json')
        .then(response => response.json())
        .then(itens => {
            const carrossel = document.getElementById('carrossel');
            totalItems = itens.length;

            itens.forEach(item => {
                // Vamos criar uma constante oara cada imagem e inserir o caminho correto,
                // por conta do sensitivity do git pages não consegue identificar o caminho para as imagens.
                const imagemPath = `data/imag/${item.imagem}`;
                
                const div = document.createElement('div');
                div.classList.add('cafeteira');
                div.innerHTML = `    
                <img src="${imagemPath}" alt="${item.imagem}" />
                    <h2>${item.nome}</h2>
                    <p>${item.descricao}</p>
                `;// foi necessário corrigir tbm o caminho src para o novo constante criado imagemPath.
                carrossel.appendChild(div);
            });

            updateCarousel(); // inicializa
        });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
});

function updateCarousel() {
    const carrossel = document.getElementById('carrossel');
    carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

