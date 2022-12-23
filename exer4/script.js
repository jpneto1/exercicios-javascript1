function diagnosticar() {
  let rendaTotal = Number(document.getElementById("renda_total").value);
  let moradia = Number(document.getElementById("moradia").value);
  let educacao = Number(document.getElementById("educacao").value);
  let transporte = Number(document.getElementById("transporte").value);

  if (rendaTotal > 0 && moradia > 0 && educacao > 0 && transporte > 0) {
    const LIMITE_MORADIA = 0.3;
    const LIMITE_EDUCACAO = 0.2;
    const LIMITE_TRANSPORTE = 0.15;

    let atualMoradia = moradia / rendaTotal;
    let atualEducacao = educacao / rendaTotal;
    let atualTransporte = transporte / rendaTotal;

    let mensagem = "";

    atualMoradia > LIMITE_MORADIA ? mensagem += "Gasto com moradia: excedido<br>" : mensagem += "Gasto com moradia: NÃO excedido<br>";
    atualEducacao > LIMITE_EDUCACAO ? mensagem += "Gasto com educação: excedido<br>" : mensagem += "Gasto com educação: NÃO excedido<br>";
    atualTransporte > LIMITE_TRANSPORTE ? mensagem += "Gasto com transporte: excedido<br>" : mensagem += "Gasto com transporte: NÃO excedido<br>";

    document.getElementById("resposta").innerHTML = mensagem;
  } else {
    document.getElementById("resposta").innerHTML = "ERRO: Preenchimento incorreto dos campos.";
  }
}
