class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto); // função do p5
    this.botao.mousePressed(() => {
      this._alteraCena();
      somIniciar.play();
    });
    this.botao.addClass('botao-tela-inicial'); // selector do CSS
  }
  
  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  
  _alteraCena() {
    this.botao.remove();
    cenaAtual = 'jogo';
  }
}