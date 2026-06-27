document.addEventListener("DOMContentLoaded", () => {

    /* POPUP ORÇAMENTO */

    const popup = document.getElementById("popup");

    document.querySelectorAll(".abrirPopup").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            popup.style.display = "flex";
        });
    });

    document.getElementById("fecharPopup").addEventListener("click", () => {
        popup.style.display = "none";
    });

    document.getElementById("calcular").addEventListener("click", () => {

        const valor = Number(document.getElementById("valorConta").value);

        if (!valor || valor <= 0) {
            alert("Digite um valor válido.");
            return;
        }

        const economia = valor * 0.95;
        const anual = economia * 12;

        document.getElementById("resultado").innerHTML =
            `Você pode economizar <strong>R$ ${economia.toFixed(2)}</strong> por mês.<br>
             Aproximadamente <strong>R$ ${anual.toFixed(2)}</strong> por ano.`;
    });

    document.getElementById("prosseguir").addEventListener("click", () => {
        popup.style.display = "none";

        document.getElementById("orcamento").scrollIntoView({
            behavior: "smooth"
        });
    });


    /* ACORDEÃO */

    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", () => {

            const content = header.nextElementSibling;

            header.classList.toggle("active");

            if (content.classList.contains("open")) {
                content.classList.remove("open");
            } else {
                content.classList.add("open");
            }
        });
    });


    /* VALIDAÇÃO FORMULÁRIO */

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const cidade = document.getElementById("cidade");
    const botao = document.getElementById("btnEnviar");

    if (botao) {
        botao.addEventListener("click", function (event) {
            event.preventDefault();

            if (!nome.value.trim()) return alert("Preencha o Nome");
            if (!email.value.trim()) return alert("Preencha o Email");
            if (!email.value.includes("@") || !email.value.includes(".")) {
                return alert("Email inválido");
            }
            if (!telefone.value.trim()) return alert("Preencha o Telefone");
            if (telefone.value.length < 10) return alert("Telefone inválido");
            if (!cidade.value.trim()) return alert("Preencha a Cidade");

            alert("Orçamento enviado com sucesso!");
        });
    }


    /* DARK MODE */

    const botaoTema = document.getElementById("btn-theme");

    function DarkMode() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botaoTema.innerText = "☀️ Modo Claro";
            console.log("MODO ESCURO ATIVADO.");
        } else {
            botaoTema.innerText = "🌑 Modo Escuro";
            console.log("MODO CLARO ATIVADO.");
        }
    }

    // torna global para o onclick funcionar no HTML
    window.DarkMode = DarkMode;
});