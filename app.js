//faz uma lista p os numeros secretos q ja foram sorteados
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    //value serve para pegar o valor que o usuario coloca no input
    //console.log(chute == numeroSecreto); //serve para indicar no console se é false ou true
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!'); //serve para mudar a frase do h1
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        //vou pegar o id do botao de novo jogo pelo getElementById
        //removeAttribute serve para remover o atributo 
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
//a função serve para executar uma determinada ação, no caso, vai verificar o chute do usuario

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){ //includes verifica se o elemento esta na lista
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido); 
        //push: adiciona item ao final de lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
//função com retorno para gerar um numero entre 1 e 10

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}//essa função serve para limpar o input quando erra o número

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(); //sorteia novo numero
    limparCampo(); //limpa o campo de input
    tentativas = 1; //volta as tentativas para a primeira
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    //esse botao so vai ser habilitado quando o usuario acertar o numero
}//vai executar a função quando clicar no botao




