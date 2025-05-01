let homescore = 0;
let guestscore = 0;

function onehome() {
    homescore += 1;
    document.getElementById("homescore").textContent = homescore;
}

function twohome() {
    homescore += 2;
    document.getElementById("homescore").textContent = homescore;
}

function threehome() {
    homescore += 3;
    document.getElementById("homescore").textContent = homescore;
}

function oneguest() {
    guestscore += 1;
    document.getElementById("guestscore").textContent = guestscore;
}

function twoguest() {
    guestscore += 2;
    document.getElementById("guestscore").textContent = guestscore;
}

function threeguest() {
    guestscore += 3;
    document.getElementById("guestscore").textContent = guestscore;
}

function homeclear() {
    homescore = 0
    document.getElementById("homescore").textContent = homescore;
}

function guestclear() {
    guestscore = 0
    document.getElementById("guestscore").textContent = guestscore;
}