window.addEventListener("click", checkKeyPress, false);
function checkKeyPress(key) {
        document.querySelector('.sprite-container').classList.add('sprite-container_hide');
}

let image = document.getElementById('image');
function onload(){

    image.animate([
        {transform: 'scale(1) ', opacity: 0.9},
        {transform: 'scale(1.2) ', opacity: 1},
    ], {
        duration: 4000,
        delay: 1,
        iterations: Infinity,
        direction: 'alternate',
        fill: 'forwards'
    });

    
}