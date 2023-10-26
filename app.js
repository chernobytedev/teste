let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let palavraTentativas = 'tentativa';
console.log(`numero secreto: ${numeroSecreto}`)

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});  
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `O número secreto é ${numeroSecreto}, você acertou com ${tentativas} ${palavraTentativas}!`);
        botaoChutar();
        botaoNovoJogo();
    }
    else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é maior`);
            tentativas = tentativas + 1;
            palavraTentativas = 'tentativas';
            
        }
        else {
            exibirTextoNaTela('p', `O número secreto é menor`);
            tentativas++;
            palavraTentativas = 'tentativas';
        }
        limparCampo();
    }
}
    function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
    }

    function botaoChutar() {
        document.getElementById('chutar').setAttribute('disabled',true);

    }

    function botaoNovoJogo() {
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
   

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt((Math.random() * numeroLimite) + 1);
   let quantidadeNumerosSorteados = listaDeNumerosSorteados.length;

   if (quantidadeNumerosSorteados == numeroLimite) {
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }
   else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function reiniciarJogo() {
    //window.location.reload();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    palavraTentativas = 'tentativa';
    console.log(`numero secreto: ${numeroSecreto}`);
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chutar').removeAttribute('disabled');
}
