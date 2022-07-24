export {} // Para não reclamar de variáveis duplicadas

// resposta do desafio 3

let botaoAtt = document.getElementById('atualizar-saldo');
let ClearBtn = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
limparSaldo();

function somarAoSaldo(soma: number) {
    if(campoSaldo){
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        clear();
    }
}

function clear(){
    soma.value = '';
}

function limparSaldo() {
    if(campoSaldo){
        saldo = 0;
        campoSaldo.innerHTML = saldo.toString();
    }
}

botaoAtt?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

ClearBtn?.addEventListener('click', function () {
    limparSaldo();
});