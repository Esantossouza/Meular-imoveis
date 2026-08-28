// Acessibilidade

// Aumentar/diminuir fonte
var corpo = document.getElementsByTagName('body')[0];
var aumentarFonte = document.getElementById('aumentar-fonte');
var diminuirFonte = document.getElementById('diminuir-fonte');

aumentarFonte.onclick = function() {
  corpo.style.fontSize = 'larger';
}

diminuirFonte.onclick = function() {
  corpo.style.fontSize = 'smaller';
}

// Alto contraste
var altoContraste = document.getElementById('alto-contraste');

altoContraste.onclick = function() {
  if (corpo.classList.contains('alto-contraste')) {
    corpo.classList.remove('alto-contraste');
  } else {
    corpo.classList.add('alto-contraste');
  }
}

// Leitura de tela
var leituraTela = document.getElementById('leitura-tela');

leituraTela.onclick = function() {
  alert('A função de leitura de tela está em desenvolvimento.');
}
