class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width; //começa onde a outra imagem termina
  }
  exibe() {
    image(this.imagem, this.x1, 0, width, height); // colocando duas imagens do cenario, uma colada no fim da outra
    image(this.imagem, this.x2, 0, width, height);
  }
  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    if (this.x1 < -width) {
      this.x1 = width;
    }
    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}