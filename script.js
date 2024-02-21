// Resultado
const btn = document.querySelector("#calcular");

btn.addEventListener("click", calculaIMC);

function calculaIMC() {
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  const mostraResultado = document.querySelector("#mostraResultado");

  if (altura == "" || peso == "") {
    mostraResultado.innerHTML = "<h2>Digite a sua Altura e Peso</h2>";
  } else {
    
    const calculaResultado = peso / altura ** 2;

    mostraResultado.innerHTML = `<h2>Seu IMC: ${calculaResultado.toFixed(
      2
    )}</h2>`;
  }
}