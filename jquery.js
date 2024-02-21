$(document).ready(function() {
    $('#altura').mask('0.00', { reverse: true });
});

$(document).ready(function() {
    $("#calcular").click(function() {
      var altura = parseFloat($("#altura").val());
      var peso = parseFloat($("#peso").val());
      
      if (altura && peso) {
        var imc = peso / (altura * altura);
        var resultado = "Seu IMC é " + imc.toFixed(2) + ". ";
        
        if (imc < 18.5) {
          resultado += "Você está abaixo do peso.";
        } else if (imc >= 18.5 && imc < 25) {
          resultado += "Você está com o peso normal.";
        } else if (imc >= 25 && imc < 30) {
          resultado += "Você está acima do peso.";
        } else {
          resultado += "Você está obeso.";
        }
        
        $("#mostraResultado").text(resultado);
      } else {
        $("#mostraResultado").text("Por favor, preencha ambos os campos corretamente.");
      }
    });
  });