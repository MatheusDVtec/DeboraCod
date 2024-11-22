const mensagens = [
    "Você é a razão dos meus sorrisos. 😊❤️",
    "Cada momento ao seu lado é especial. 🌟💖",
    "Eu admiro a dedicação que você tem em tudo o que faz. 👏💪",
    "Adoro as conversas profundas e divertidas que temos. 🗨️💞",
    "Seu cheiro é o melhor do mundo. 🌸✨",
    "Seu abraço é o lugar mais aconchegante. 🤗💓",
    "Cada detalhe seu me faz te amar ainda mais. 💕🥰",
    "Mal posso esperar pelo nosso futuro juntos. 💍💑",
];

let indice = 0;

document.getElementById("btn-surpresa").addEventListener("click", () => {
    const mensagemElement = document.getElementById("mensagem");

    if (indice < mensagens.length) {
        mensagemElement.textContent = mensagens[indice];
        indice++;
    } else {
        mensagemElement.textContent = "Essa foi a última mensagem, mas nosso futuro ainda reserva muitas surpresas! ✨";
        document.getElementById("btn-surpresa").style.display = "none";
    }
});
