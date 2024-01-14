const runing = document.querySelector('#runing');
const stone = document.querySelector('#stone');
const gameOver = document.querySelector('#game-over');
const stop = document.querySelector('#stop');
const time = document.querySelector('#time');
const music = document.getElementById('music');

let timeElapsed = 0;

document.addEventListener('click', () => {
    music.play();
});

document.addEventListener('touchstart', () => {
    music.play();
});

let jumping = () => {
    runing.classList.add('jumping');
    
    runing.classList.remove('jumping');

    void runing.offsetWidth;

    runing.classList.add('jumping');
}

let Collision = setInterval(() => {
    const stoneLocal = stone.offsetLeft;
    const runingLocal = parseInt(window.getComputedStyle(runing).bottom.replace('px', ''));

    if (stoneLocal <= 95 &&  
        runingLocal <= 70 && 
        stoneLocal > 0
    ) {
        gameOver.style.display = 'block';

        stone.style.animation = 'none';
        stone.style.left = stoneLocal + 'px';
        stone.style.animationPlayState = 'paused';
        
        runing.style.animation = 'none';
        runing.style.bottom = runingLocal + 'px';
        
 
        runing.replaceWith(stop);
        stop.style.display = 'block';

        clearInterval (Collision);
        music.pause();
    }  

    timeElapsed ++;
    time.textContent = `Percorrido: ${timeElapsed}s`;

}, 9);

document.addEventListener ('keydown', jumping); 
document.addEventListener ('touchstart', jumping);
