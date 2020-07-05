class Jogo {
  constructor() {
    this.indice = 0; // para ler o mapa
    
    this.mapa = fita.mapa; // vem do JSON
    
    this.fimDeJogo = false;
    
  }
  
  setup() {
    cenario = new Cenario(imagemCenario, 10);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 100, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }
  
  
  
  keyPressed(key) {
    if (!this.fimDeJogo && (key === 'ArrowUp' || key === 'click' || key === 'touch')) {
      personagem.pula();
      somDoPulo.play();
    } else if (this.fimDeJogo && (key === 'Enter' || key === 'click' || key === 'touch')) {
      window.location.reload();
    }
  }
  
    
  draw() {
    //image(imagemCenario, -50, 0, width, height); // colocando duas imagens do cenario, uma colada no fim da outra
    //image(imagemCenario, width-50, 0, width, height);
    cenario.exibe();
    cenario.move();
  
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo]; // um inimigo por vez
    const inimigoVisivel = inimigo.x < -inimigo.largura; // saber se o inimigo já saiu da tela
    
    inimigo.velocidade = linhaAtual.velocidade; // muda a velocidade do inimigo

    inimigo.exibe();
    inimigo.move();
    

    if (inimigoVisivel) { //trocar de inimigo
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
      
    }



    if (personagem.estaColidindo(inimigo)) {
      
      //console.log('colidiu');
      vida.perdeVida();
      personagem.tornarInvencivel();
      
      if (vida.vidas === 0) {
        somDoJogo.stop();
        somGameover.play();
        gameOver(this); ///////////
        noLoop(); // se colidiu, pára
      }
      
    } 
    
  } 
    
}


function gameOver(that) {
  background('rgba(0%,0%,0%,.80)');
  fill("fff");

  textAlign(CENTER);
  textSize(30);
  text(`You scored ${parseInt(pontuacao.pontos)} PointS`,
    width / 2,
    height / 3 - 50
  );
  that.fimDeJogo = true;
  personagem.stopBlinking();

  image(imagemGameOver, width / 2 - 412 / 2, height / 3 - 68 / 2);
  
  image(imagemPersonagemMorta1,width / 2 - 200 / 2, height / 2 - 58 / 2, 200, 200);
  // image(imagemPersonagemMorta2,width / 2 - 200 / 2, height / 2 - 58 / 2, 200, 200);

  
  
  
  
  
  textAlign(CENTER);
  textSize(30);
  text("Press ENTER or CLICK to play agaiN", width / 2, height / 2 + 220)

}
