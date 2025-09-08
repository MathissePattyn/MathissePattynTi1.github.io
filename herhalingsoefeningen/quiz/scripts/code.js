const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", submit);

    let btnVoorblad = document.getElementById("btnVoorblad");
    btnVoorblad.addEventListener("click", toonVragen);
}

const berekenPunten = () => {

}

const toonVragen = () => {
    let voorblad = document.getElementsByClassName("voorblad")[0];
    voorblad.style.visibility = "hidden";

    let vragen = document.getElementsByClassName("vragen");
    for(let i = 0; i < vragen.length; i++){
        vragen[0].classList.remove("hidden");
        let inputs = vragen[i].querySelectorAll("input[type='radio']")
        inputs.forEach(input => {
            input.addEventListener("change", (e) => {
                if(input.value === "1"){
                    if (i + 1 < vragen.length) {
                        vragen[i + 1].classList.remove("hidden");
                    }

                }
            })
        })
    }
    let quiz = document.getElementsByClassName("quiz")[0];
    quiz.classList.remove("hidden");
}

const CorrectAntwoord = (vraag) => {
    if(vraag.checked){

    }
}


const submit = () => {
    let score = 0;
    let vraag1 = document.getElementsByName("vraag1");
    for (let i = 0; i < vraag1.length; i++) {
        if(vraag1[i].checked && vraag1[i].value !== "0"){
            score++;
        }
    }
    console.log("score: " + score);
}

window.addEventListener("load", setup);