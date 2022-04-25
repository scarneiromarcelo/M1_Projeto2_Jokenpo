const prompt = require('prompt-sync')();

// Função para gerar números randômicos
function getRandomInt (min, max){
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

//Declaração de variáveis:
let elementos = ['0', 'PEDRA', 'PAPEL', 'TESOURA'];
let random = 0;
let jogador = '';
let bot = 0;
let placarBot = 0;
let placarJogador = 0;
let empate = 0;

//Indrodução do meu programa:
console.log(`BEM VINDOS AO JOKENPÔ!
Instruções:
Jogador(a), essa versão digital do Jokenpô possuí a mesma proposta do jogo clássico.
Será apresentado três elementos e o seu oponente é um BOT. Faça a sua escolha e aguarde a interação..`);
console.log();

prompt('PRESS ENTER PARA CONTINUAR..');
console.clear();

//Validando jogar novamento utilizando do while:
do {
    let turnos
    //Validando a quantidade de turnos utilizando do while:
    do {
        turnos = prompt('QUANTAS RODADAS DESEJA JOGAR?')
        console.clear();
    } while (isNaN(turnos));
    console.clear();
    
    //Inicio da execução:
    for ( let i = 1; i <= turnos; i++) {
        console.log(`
        [1] PEDRA
        [2] PAPEL
        [3] TESOURA`);
    
        console.log();
    
        random = getRandomInt();
        bot = elementos[random];
        console.log('JOGADOR(A), ESCOLHA O SEU ELEMENTO.');
        jogador = +prompt('');
        console.clear();
    
        while (jogador !== 1 && jogador !== 2 && jogador !== 3) {
            console.log(`POR FAVOR, INSIRA UM VALOR DE ELEMENTO VÁLIDO!
        [1] PEDRA
        [2] PAPEL
        [3] TESOURA`)
            jogador = +prompt('');
            console.clear();
        }
    
        jogador = elementos[jogador];
    
        //Condição de vitória:
        if (jogador == elementos[3] && bot == elementos[2] || bot == elementos[1]) {
            console.log('O COMPUTADOR VENCEU A RODADA!');
            placarBot++
        } else if (bot == elementos[3] && jogador == elementos [2] || jogador == elementos[1]) {
            console.log('JOGADOR(A) VOCÊ VENCEU A RODADA!');
            placarJogador++
        } else {
            console.log('EMPATE!');
            empate++
        }     
            
    }
    console.clear();

    //Condição de vitória:
    if (placarBot > placarJogador) {
        console.log('O COMPUTADOR É O GRANDE CAMPEÃO! TENTE NOVAMENTE..');
    } else if (placarBot < placarJogador) {
        console.log('VOCÊ VENCEU A MÁQUINA! PARABÉNS..');
    } else if (placarBot == placarJogador) {
        console.log('EMPATE! SE ESTIVER COM TEMPO JOGUE NOVAMENTE!')
    }

    console.log();
    
    //Placar final:
    console.log(`TOTAL DE ${turnos} TURNOS`)
    console.log(`BOT ${placarBot} e JOGADOR(A) ${placarJogador}. TURNOS EMPATADOS ${empate}`); // PLACAR
    console.log();
    
    //Zerando o placar:
    placarBot = 0;
    placarJogador = 0;
    empate = 0;

    j = prompt('DESEJA REINICIAR O JOGO? [S] OU [N]').toLowerCase();
    while (j != 's' && j != 'n') {
        console.log('VALOR INVÁLIDO!');
        j = prompt('DESEJA REINICIAR O JOGO? [S] OU [N]').toLowerCase();
    }

} while ( j == 's');