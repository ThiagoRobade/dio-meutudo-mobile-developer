// Player1 - Mario
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

// Player2 - Luigi
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`Rodada ${round}`);
    }
}

(async function main() {
    console.log("" +
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...
`
    );
    await playRaceEngine(player1, player2);
})();

