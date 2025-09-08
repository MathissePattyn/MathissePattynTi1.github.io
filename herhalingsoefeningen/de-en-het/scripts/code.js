const setup = () => {
    let zin = "de appel valt nooit ver van de boom";

    let zoekwoord = "de";
    let veranderwoord = "het";

    let arrayWoorden = zin.split(" ");
    console.log(arrayWoorden);
    for(let i = 0; i < arrayWoorden.length; i++) {
        if(arrayWoorden[i].toLowerCase() === zoekwoord) {
            console.log(arrayWoorden.slice(0,i) + veranderwoord);
        }
    }
    console.log(arrayWoorden);
}
window.addEventListener("load", setup);