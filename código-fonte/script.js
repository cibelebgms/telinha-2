// Guarda a categoria que está escolhida no momento
var categoriaAtual = "Tudo";

// Quando clica num botão de categoria
function escolherCategoria(categoria, botao) {
  categoriaAtual = categoria;

  // tira o roxo de todos os botões e pinta só o que foi clicado
  var botoes = document.getElementsByClassName("filtro");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativo");
  }
  botao.classList.add("ativo");

  aplicarFiltros();
}

// Mostra ou esconde cada card (usa a categoria e o que foi digitado na busca)
function aplicarFiltros() {
  var busca = document.getElementById("busca").value.toLowerCase();
  var cards = document.getElementsByClassName("card");
  var quantos = 0;

  for (var i = 0; i < cards.length; i++) {
    var categoriaDoCard = cards[i].getAttribute("data-categoria");
    var textoDoCard = cards[i].innerText.toLowerCase();

    var passouCategoria = (categoriaAtual == "Tudo" || categoriaDoCard == categoriaAtual);
    var passouBusca = (textoDoCard.indexOf(busca) != -1);

    if (passouCategoria && passouBusca) {
      cards[i].style.display = "flex";
      quantos++;
    } else {
      cards[i].style.display = "none";
    }
  }

  mostrarContador(quantos);
  mostrarAviso(quantos);
}

// Escreve "Mostrando 5 de 35 cursos"
function mostrarContador(quantos) {
  var total = document.getElementsByClassName("card").length;
  var texto = "Mostrando " + quantos + " de " + total + " cursos";

  if (quantos == 1) {
    texto = "Mostrando 1 de " + total + " cursos";
  }

  document.getElementById("contador").innerText = texto;
}

// Mostra a mensagem quando nenhum curso é encontrado
function mostrarAviso(quantos) {
  var aviso = document.getElementById("aviso");

  if (quantos == 0) {
    aviso.style.display = "block";
  } else {
    aviso.style.display = "none";
  }
}

// Quando a página abre
aplicarFiltros();