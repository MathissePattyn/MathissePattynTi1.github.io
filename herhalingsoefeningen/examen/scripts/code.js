let global={
    HUIDIGEVRAAG:"",
    PUNTEN: 0,
    HIGHSCORES:[],
    QUESTIONS:[
        {
            question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
            answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
            correct: "Cloud Strife",
            selected: ""
        },
        {
            question: "Welke wereld wordt verkend in Final Fantasy XV?",
            answers: ["Gaia", "Eos", "Spira", "Cocoon"],
            correct: "Eos",
            selected: ""
        },
        {
            question: "Wie is de antagonist in Final Fantasy VIII?",
            answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
            correct: "Ultimecia",
            selected: ""
        },
        {
            question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
            answers: ["Ja", "Nee"],
            correct: "Ja",
            selected: ""
        },
        {
            question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
            answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
            correct: "Midgar",
            selected: ""
        },
        {
            question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
            answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
            correct: "Ifrit",
            selected: ""
        },
        {
            question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
            answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
            correct: "Ragnarok",
            selected: ""
        },
        {
            question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
            answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
            correct: "Luchtschipkapitein",
            selected: ""
        },
        {
            question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
            answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
            correct: "Ze gebruiken de aanval 1000 Needles",
            selected: ""
        },
        {
            question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
            answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
            correct: "Malboro",
            selected: ""
        }
    ]

}

const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", start);
}

const start = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.remove();
    let card = document.getElementById("card");
    for (let i = 0; i < global.QUESTIONS.length; i++) {
        let kaartContainer = maakElement("div","container vraag"+i);
        let kaartVraag = maakElement("h1","kaartVraag",global.QUESTIONS[i].question);
        let antwoorden = maakElement("div","antwoorden");
        let options = global.QUESTIONS[i].answers;
        for(let j =0; j<options.length; j++) {
            let optieId = "v" + i + "O" +j;
            let option = maakElement("input","optie");
            option.setAttribute("value", options[j]);
            option.setAttribute("type", "radio");
            option.setAttribute("name", "vraag" +i)
            option.setAttribute("id", optieId)

            let label = maakElement("label","");
            label.setAttribute("for", optieId);
            label.textContent = options[j];
            label.appendChild(option);
            antwoorden.appendChild(label);
        }
        kaartContainer.appendChild(kaartVraag);
        kaartContainer.appendChild(antwoorden)

        card.appendChild(kaartContainer);
    }
    let btnIndienen = maakElement("input");
    btnIndienen.setAttribute("type", "button");
    btnIndienen.setAttribute("id", "btnIndienen");
    btnIndienen.setAttribute("value", "INDIENEN");

    let quiz = document.getElementById("quiz");
    quiz.appendChild(btnIndienen);

    btnIndienen.addEventListener('click', telPunten);

}

const telPunten = () => {
  for (let i = 0; i < global.QUESTIONS.length; i++) {
        let naam = "vraag" +i;
        let antwoorden = document.getElementsByName(naam)
      let geselecteerd = null;
      for(let antwoord of antwoorden){
          if(antwoord.checked){
              geselecteerd = antwoord;
          }
      }
      if(geselecteerd && geselecteerd.value === global.QUESTIONS[i].correct){
          global.PUNTEN++;
      }
  }
  console.log(global.PUNTEN)
}

const maakElement = (element, className="", text="") => {
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