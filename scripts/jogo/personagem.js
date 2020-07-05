class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.yInicial = height - this.altura - this.variacaoY; // -variacaoY para não ficar exatamente no fim da tela
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }
  
  pula() {
    if (this.pulos < 2){ // limitar para 2 pulos
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
    
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial) {
      this.y = this.yInicial; // toca o chão
      this.pulos = 0; // zera o núm de pulos
      
    }
    
  }
  
  tornarInvencivel() { // para perder só uma vida em cada colisão
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false;
    }
    
    const precisao = 0.7; // pq os retângulos são bem maiores que o personagem e o inimigo
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    return colisao;
  }
}