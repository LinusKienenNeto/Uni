function mostrarResultado() {
    var select = document.getElementById("mes");
    var mesSelecionado = select.value;
    var nomeMes = select.options[select.selectedIndex].text;

    document.getElementById("resultado").innerText = "O mês selecionado é: " + nomeMes + " (" + mesSelecionado + ")";
  }