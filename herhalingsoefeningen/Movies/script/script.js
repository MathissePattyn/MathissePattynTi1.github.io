// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
let likedMovies = [];

const setup = () => {
    console.log("setup");
    laadMovies();
}

const laadMovies = () => {
    console.log("laadMovies");

    let movieList = document.getElementById("movielist");
    for(let i = 0; i<movies.length; i++){
        let movie = maakElement("div","movie");
        let title = maakElement("h3","title",movies[i].title);
        let description = maakElement("p","description",movies[i].description);
        let img = maakElement("img","img");
        img.setAttribute("src",movies[i].imageUrl);
        img.setAttribute("alt",movies[i].title);

        movie.appendChild(title);
        movie.appendChild(description);
        movie.appendChild(img);
    }
}

const maakElement = (element, className="", text="") => {
    let e = document.createElement(element);

    if(className){
        className.split(" ").forEach((className) => {e.classList.add(className);});
    }

    if(text){
        e.textContent = text;
    }
    return e;
}

window.addEventListener('load', setup)
