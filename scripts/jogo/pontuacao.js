class Pontuacao {
  constructor() {
    this.pontos = 0;
    // this.board = createElement('span',this.pontos.toString());
    //this.board.addClass('c_pontuacao');
    
  }

  exibe() {
    // this.board.content = "texto";
    // this.board.position(width - 60, 20);
    textAlign(RIGHT);
    textFont('Luckiest Guy');
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