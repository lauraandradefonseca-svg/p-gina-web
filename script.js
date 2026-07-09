function comprar() {
    alert("Obrigado pelo interesse! Seu perfume foi adicionado ao carrinho.");
}

let favorito = false;

function favoritar() {

    favorito = !favorito;

    const botao = document.querySelector(".like");

    if (favorito) {
        botao.innerHTML = "💛 Favoritado";
        botao.style.background = "#d4af37";
        botao.style.color = "black";
    } else {
        botao.innerHTML = "❤ Favoritar";
        botao.style.background = "#222";
        botao.style.color = "white";
    }

}