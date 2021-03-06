class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
    
    this.isBlinking =false;
    this.blinkCount = 0;
  }
  
  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
  // arq, posx_tela, poxy_tela, wid, hei, posx_sprite, posy_sprite, wid_sprite, hei_sprite
    this.anima();
  }
  

  
  
  blink(){
    this.isBlinking = true;
    if (frameCount%2 === 0 ){
        this.imagem.filter(INVERT);
        this.blinkCount++;
    }
  }
  
  stopBlinking(){
    this.isBlinking = false;
    if (this.blinkCount % 2 !==0){
      this.imagem.filter(INVERT);
      this.blinkCount = 0;
    }        
  }
  
  anima() {
    // if (velocidade_atual === 0) return 0;
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length-1){
      this.frameAtual = 0;
    }

    if (this.isBlinking){
      this.blink();
    }
}
  
}