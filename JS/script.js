/* Calcular Orçamento */

document.querySelectorAll(".abrirPopup").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "flex";
    });
});

document.getElementById("fecharPopup").onclick = function(){

    popup.style.display = "none";

}

document.getElementById("calcular").onclick = function(){

    const valor = Number(document.getElementById("valorConta").value);

    if(valor <= 0){

        alert("Digite um valor válido.");

        return;
    }

    const economia = valor * 0.95;

    const anual = economia * 12;

    document.getElementById("resultado").innerHTML =

    `Você pode economizar <strong>R$ ${economia.toFixed(2)}</strong> por mês.<br>
    Aproximadamente <strong>R$ ${anual.toFixed(2)}</strong> por ano.`;

}

document.getElementById("prosseguir").addEventListener("click", function () {

    document.getElementById("popup").style.display = "none";

    document.getElementById("orcamento").scrollIntoView({
        behavior: "smooth"
    });

});

/* Função do Modo Escuro */

function DarkMode() {
    const body = document.body;
    const botaoTema = document.getElementById("btn-theme");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        botaoTema.innerText = "☀️ Modo Claro";
        console.log("MODO ESCURO ATIVADO.");
    } else{
        botaoTema.innerText = "🌑 Modo Escuro";
        console.log("MODO CLARO ATIVADO.");
    }
}

