class Jogo {
  constructor() {
    this.indice = 0; // para ler o mapa
    
    this.mapa = fita.mapa; // vem do JSON
    
  }
  
  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
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
        image(imagemGameOver,width/2 - 200, height/3);
        noLoop(); // se colidiu, pára
      }
      
    }
  }
    
}