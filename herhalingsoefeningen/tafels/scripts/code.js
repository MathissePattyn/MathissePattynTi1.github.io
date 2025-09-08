const setup = () => {
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener('click', maakTafels)
}

const maakTafels = () => {
    let getal = document.getElementById('nmbGetal').value
    console.log(getal);
    let container = createElement('div','container')
    for (let i = 1; i <= 10; i++) {
        let string = getal + " x " + i + " = " + (getal * i);
        let div = createElement('p','', string);
        container.appendChild(div);
    }
    let tafels = document.getElementById('tafels');
    tafels.appendChild(container);
}

const createElement = (element, className="", text="") => {
    let e = document.createElement(element);
    if(className){
        className.split(" ").forEach(className => e.classList.add(className));
    }
    if(text){
        e.textContent = text;
    }
    return e;
}

window.addEventListener("load", setup);