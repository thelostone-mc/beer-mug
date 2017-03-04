function random() {
    return Math.random();
}

function init() {
    const drink = document.getElementById("drink");
    for(let i = 0; i <  20; i++) {
        let bubble = document.createElement("div");
        bubble.className = "bubble";
        let position = 50 + (i * 11);
        bubble.style.right = position + "px";
        bubble.style['animation-delay'] =  (random() * 4) + 's';
        drink.appendChild(bubble);
    }
}

init();
