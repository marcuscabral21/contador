let count = 0; //Declarei variaval 

const value = document.querySelector("#value"); //Seleciono o elemento HTML com ID = value e armazeno na variável value
const btnDecrease = document.querySelector(".btn-decrease"); //Seleciono o botão com a classe ".btn-decrease" e armazeno na variáel btnDecrease
const btnReset = document.querySelector(".btn-reset"); //Seleciono o botão com a classe ".btn-reset" e armazeno na variáel btnReset
const btnIncrease = document.querySelector(".btn-increase"); //Seleciono o botão com a classe ".btn-increase" e armazeno na variáel btnIncrease

btnDecrease.addEventListener("click", function () { //Quando clico neste btn chama essa função anônima q faz...
    count--; //Subtrai 
    updateCounter(); //Atualiza o contador
});

btnReset.addEventListener("click", function () { //Quando clico neste btn chama essa função anônima q faz...
    count = 0; //reseta
    updateCounter(); //Atualiza o contador
});

btnIncrease.addEventListener("click", function () { //Quando clico neste btn chama essa função anônima q faz...
    count++; //soma
    updateCounter(); //Atualiza o contador
});

function updateCounter() { //Definindo a função
    if (count > 0) { 
        value.style.color = "green"; //Se for maior que 0, fica verde
    } else if (count < 0) {
        value.style.color = "red"; //Se for menor que 0, fica vermelho
    } else {
        value.style.color = "#222"; //Se igual a 0, fica na cor padrão
    }
    value.textContent = count;
}
