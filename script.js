document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um evento de clique a todos os links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o destino do link
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Rola suavemente para o destino
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});