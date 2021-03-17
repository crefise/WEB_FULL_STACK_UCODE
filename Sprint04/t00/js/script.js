function transformation() {
    mode *= -1;
    if (mode === 1) {
        hero.innerHTML = "Bruce Banner";
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px";
        lab.style.backgroundColor = "#ffb300";
    }
    else {
        hero.innerHTML = "Hulk";
        hero.style.fontSize = "120px";
        hero.style.letterSpacing = "6px";
        lab.style.backgroundColor = "#70964b";
    }
}


let mode = 1;
