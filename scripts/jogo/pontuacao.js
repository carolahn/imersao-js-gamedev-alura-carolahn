class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
    // text é método do p5 (texto, posx, posy)
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2; 
    // pontos são adicionados conforme a veloc dos frames
  }
  
  
}