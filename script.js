// Pucca World
// JavaScript + DOM


// Pegando os elementos que vou usar da página

const mensagem = document.querySelector("#mensagem");

const surpresaBtn = document.querySelector("#surpresaBtn");

const corBtn = document.querySelector("#corBtn");

const pucca = document.querySelector("#pucca");

const heart = document.querySelector("#heart");

const temaBtn = document.querySelector("#temaBtn");

const amorBtn = document.querySelector("#amorBtn");

const amorMensagem = document.querySelector("#amorMensagem");

const curiosidadeBtn = document.querySelector("#curiosidadeBtn");

const curiosidade = document.querySelector("#curiosidade");

const bigHeart = document.querySelector("#bigHeart");

const likeMessage = document.querySelector("#likeMessage");

const personagemMensagem =
    document.querySelector("#personagemMensagem");


// Botão que mostra uma mensagem aleatória

const mensagens = [

    "Pucca mandou um beijo para você! 💋",

    "Hoje é um ótimo dia para espalhar amor! 💗",

    "Garu apareceu por aqui! 🥷",

    "A Pucca está preparando um delicioso macarrão! 🍜",

    "Você encontrou uma surpresa secreta! ✨"

];


surpresaBtn.addEventListener("click", function () {

    const numero =
        Math.floor(Math.random() * mensagens.length);

    mensagem.textContent = mensagens[numero];

    // Faz a Pucca dar uma pequena animação

    pucca.classList.add("pulse");


    setTimeout(function () {

        pucca.classList.remove("pulse");

    }, 400);

});


// Botão para mudar a cor da página

const cores = [

    "#ff5c8a",
    "#9b6de3",
    "#4da6d8",
    "#f09a42",
    "#58b88b"

];


let corAtual = 0;


corBtn.addEventListener("click", function () {

    corAtual++;

    // Volta para a primeira cor quando chegar no final

    if (corAtual >= cores.length) {

        corAtual = 0;

    }


    document.documentElement.style.setProperty(
        "--rosa",
        cores[corAtual]
    );

});


// Botão do coração pequeno

heart.addEventListener("click", function () {

    // Se estiver vazio, o coração fica preenchido

    if (heart.textContent === "♡") {

        heart.textContent = "♥";

        heart.classList.add("pulse");

    } else {

        heart.textContent = "♡";

    }

});


// Botão para ativar o modo escuro

temaBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    // Troca o ícone dependendo do tema

    if (document.body.classList.contains("dark")) {

        temaBtn.textContent = "☀️";

    } else {

        temaBtn.textContent = "🌙";

    }

});


// Mostra uma mensagem quando clicar no botão

amorBtn.addEventListener("click", function () {

    amorMensagem.textContent =
        "A Pucca nunca desiste de conquistar o coração do Garu! 💕";

});


// Lista de curiosidades sobre a Pucca

const curiosidades = [

    "Pucca é conhecida por seu amor pelo Garu. 💗",

    "Garu é um ninja habilidoso. 🥷",

    "Macarrão aparece bastante nas aventuras da Pucca. 🍜",

    "Pucca é uma personagem muito determinada. ✨",

    "A história da Pucca mistura comédia, aventura e romance. 💕"

];


curiosidadeBtn.addEventListener("click", function () {

    // Escolhe uma curiosidade aleatória

    const numero =
        Math.floor(Math.random() * curiosidades.length);


    curiosidade.textContent =
        curiosidades[numero];

});


// Botões dos personagens

const personagemBotoes =
    document.querySelectorAll(".personagemBtn");


personagemBotoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const personagem =
            botao.dataset.personagem;


        // Mostra uma mensagem de acordo com o personagem

        if (personagem === "Pucca") {

            personagemMensagem.textContent =
                "Pucca é divertida, apaixonada e muito determinada! 💗";

        }


        if (personagem === "Garu") {

            personagemMensagem.textContent =
                "Garu é um ninja habilidoso que tenta manter a calma. 🥷";

        }


        if (personagem === "Ching") {

            personagemMensagem.textContent =
                "Ching é uma das amigas da Pucca e está sempre por perto! 🍜";

        }

    });

});


// Coração principal da página

let curtido = false;


bigHeart.addEventListener("click", function () {

    // Muda entre curtido e não curtido

    curtido = !curtido;


    if (curtido) {

        bigHeart.textContent = "♥";

        likeMessage.textContent =
            "Você também gosta da Pucca! 💗";

        bigHeart.classList.add("pulse");

    } else {

        bigHeart.textContent = "♡";

        likeMessage.textContent = "";

    }

});