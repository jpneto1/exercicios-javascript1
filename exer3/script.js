function calcular(){
  let altura = Number(document.getElementById("altura").value);
  let peso = Number(document.getElementById("peso").value);
  let imc = 0;
  
  if(!Number.isNaN(altura) && !Number.isNaN(peso) && altura > 0 && peso > 0){
    altura > 3 ? altura /= 100 : altura /= 1;

    imc = peso / Math.pow(altura, 2);

    document.getElementById("resposta").innerHTML = "SEU IMC: " + imc.toFixed(2);
  }
}
