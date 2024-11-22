const mensagens = [
    "Você é a razão dos meus sorrisos. 🥰",
    "Cada momento ao seu lado é especial. 💕",
    "Mal posso esperar pelo nosso futuro juntos. 💍",
    "Eu te amo mais do que palavras podem expressar. ❤️",
];

let indice = 0;

document.getElementById("btn-surpresa").addEventListener("click", () => {
    const mensagemElement = document.getElementById("mensagem");

    if (indice < mensagens.length) {
        mensagemElement.textContent = mensagens[indice];
        indice++;
    } else {
        mensagemElement.textContent = "Essa foi a última mensagem, mas meu amor por você é infinito! 💖";
        document.getElementById("btn-surpresa").style.display = "none";
    }
});
