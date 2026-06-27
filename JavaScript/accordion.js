document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Alterna o estado visual
            header.classList.toggle('active');

            // Encontra o conteúdo associado
            const content = header.nextElementSibling;

            // Lógica de exibição
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});