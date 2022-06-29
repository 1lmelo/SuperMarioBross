var pipe = document.getElementById("pipe");

function jump() {
    var mario = document.getElementById("mario");
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

var loop = setInterval(function (){
    var pipePosition = pipe.offsetLeft;
    var marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80)
    {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './asset/game-over.png';
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
    }

}, 10);

document.addEventListener('keydown', jump);