let runing = document.querySelector('#runing');

let jumping = () => {
    runing.classList.add('jumping');

    setTimeout(() => {
        runing.classList.remove('jumping');
    }, 600);
}

const loop = setInterval (() => {
    const pipeLocal = pipe.offsetLeft;
}, 12);

document.addEventListener('keydown', jumping);