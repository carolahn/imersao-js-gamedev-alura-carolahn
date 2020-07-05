function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40); // regular a velocidade das animações
  somDoJogo.loop();
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
  
  cenas = {
    jogo : jogo,
    telaInicial : telaInicial
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
 cenas[cenaAtual].draw();
}

