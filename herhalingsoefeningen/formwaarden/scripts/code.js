const setup = () => {
    let btnUpload = document.getElementById('btnUpload');
    btnUpload.addEventListener('click', upload);
}

const upload = () => {
    let roker = document.getElementById('roker');
    if (roker.checked) {
        console.log("is roker")
    } else {
        console.log("is geen roker")
    }

    let moedertaal = document.getElementsByName("moedertaal");
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal: " + moedertaal[i].value);
        }
    }

    let favorieteBuurland = document.getElementById('selFavBuurland');
    let index = favorieteBuurland.selectedIndex;
    let option = favorieteBuurland.options[index];
    console.log("Favoriete buurland: " + option.text);

    let selBestelling = document.getElementsByName('selBestelling')[0];
    for (let i = 0; i < selBestelling.length; i++) {
        if(selBestelling.options[i].selected){
            console.log("Bestelling: " + selBestelling.options[i].value);
        }
    }
}

window.addEventListener("load", setup);
