let currentIndex = 0;
let totalItems = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetch('../data/cafeteria.json')
        .then(response => response.json())
        .then(itens => {
            const carrossel = document.getElementById('carrossel');
            totalItems = itens.length;

            itens.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('cafeteira');
                div.innerHTML = `
                    <img src="${item.imagem}" alt="${item.imagem}">
                    <h2>${item.nome}</h2>
                    <p>${item.descricao}</p>
                `;
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

