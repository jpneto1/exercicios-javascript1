function informar() {
  let qtdDoces = Number(document.getElementById("qtd_doces").value);
  let capacidade = Number(document.getElementById("capacidade").value);

  if (Number.isInteger(qtdDoces) > 0 && Number.isInteger(capacidade) > 0) {
    let caixaCompleta = Math.trunc(qtdDoces / capacidade);
    let restante = qtdDoces % capacidade;

    if (restante == 0) {
      document.getElementById("informacoes").innerHTML = "<br> Caixas completas: " + caixaCompleta;

    } else {
      document.getElementById("informacoes").innerHTML = "<br> Caixas completas: " + caixaCompleta + "<br> Caixas incompletas: 1 (para " + restante + " doces)";

    }
  } else {
    document.getElementById("informacoes").innerHTML = "<br> Erro: Informações incorretas."
  }

}
