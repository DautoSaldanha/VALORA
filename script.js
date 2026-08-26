const leadModal = document.getElementById("lead-modal");

document.querySelectorAll("[data-lead]").forEach((button) => {
    button.addEventListener("click", () => {
        leadModal.showModal();
    });
});

document.getElementById("lead-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const nome = data.get("nome");
    const valorDivida = data.get("valor_divida");
    const assunto = data.get("assunto");

    let message = `Olá, sou ${nome}. `;

    if (valorDivida) {
        message += `O valor aproximado da minha dívida é ${valorDivida}. `;
    }

    message += `Gostaria de falar sobre: ${assunto}.`;

    window.open(
        `https://wa.me/5561998318421?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});