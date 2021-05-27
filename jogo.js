console.log('Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  velocidade: 0,
  gravidade: 0.25,

  atualiza(){
    flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
    console.log(flappyBird.velocidade);
    flappyBird.y = flappyBird.y + flappyBird.velocidade;
  },

  desenha(){
    contexto.drawImage(
      sprites,
      flappyBird.spriteX, flappyBird.spriteY, //sprite x e sprite y da img
      flappyBird.largura, flappyBird.altura, // tamanho do recorte
      flappyBird.x, flappyBird.y, //posição no canvas
      flappyBird.largura, flappyBird.altura, //tamanho no canvas
    );
  }
}

const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura,
    );

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x + chao.largura), chao.y,
      chao.largura, chao.altura,
    );
  },
};

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height);

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
    }
  }


function loop(){
  flappyBird.atualiza();

  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();
  
  requestAnimationFrame(loop);
}

loop();

