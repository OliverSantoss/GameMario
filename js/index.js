var mario = document.querySelector('.mario');
var pipe = document.querySelector('.pipe');
var gameOver = document.querySelector('.gameOver');
var cloud = document.getElementsByClassName("nuvem");
var audio = document.querySelector(".audio");
var audioMario = document.querySelector(".audioMario");
var fundo = document.querySelector('.game-board');

const loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        for (let i = 0; i < cloud.length; i++) {
            cloud[i].style.animation = 'none';
            cloud[i].style.display = 'none';
        }

        fundo.style.background = 'black';
        gameOver.style.display = 'block';
        audioMario.pause();
        audio.play();
        

        clearInterval(loop);
    }
}, 10);

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500);
}

const tocar = () => {
    audioMario.play();
};

document.addEventListener('keydown', jump);
document.addEventListener('keydown', tocar);
