function sacar() {
  let saque = Number(document.getElementById("valor_saque").value);

  if (Number.isInteger(saque) && saque > 0 && saque % 10 == 0) {

    let notas100 = Math.trunc(saque / 100);
    saque = saque - (notas100 * 100);
    let notas50 = Math.trunc(saque / 50);
    saque = saque - (notas50 * 50);
    let notas20 = Math.trunc(saque / 20);
    saque = saque - (notas20 * 20);
    let notas10 = Math.trunc(saque / 10);
    saque = saque - (notas10 * 10);

    let mensagemSaque = "<br>";

    if (notas100 > 0) {
      mensagemSaque += notas100 + " notas de 100<br>";
    }
    if (notas50 > 0) {
      mensagemSaque += notas50 + " notas de 50<br>";
    }
    if (notas20 > 0) {
      mensagemSaque += notas20 + " notas de 20<br>";
    }
    if (notas10 > 0) {
      mensagemSaque += notas10 + " notas de 10";
    }

    document.getElementById("mensagem").innerHTML = mensagemSaque;

  } else {
    document.getElementById("mensagem").innerHTML = "<br>ERRO: Digite um valor válido"
  }
}

function sacar10() {
  document.getElementById("valor_saque").value = 10;
}

function sacar20() {
  document.getElementById("valor_saque").value = 20;
}

function sacar50() {
  document.getElementById("valor_saque").value = 50;
}

function sacar100() {
  document.getElementById("valor_saque").value = 100;
}

function sacar300() {
  document.getElementById("valor_saque").value = 300;
}

function sacar500() {
  document.getElementById("valor_saque").value = 500;
}

function sacar900() {
  document.getElementById("valor_saque").value = 900;
}

function sacar1200() {
  document.getElementById("valor_saque").value = 1200;
}
