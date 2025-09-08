// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
let likedMovies = [];

const setup = () => {
    console.log("setup");
    laadMovies();
    toonLikedMovies();
}

const likeDislikeCounter = () => {
    let likecounter = document.getElementById("like");
    let dislikecounter = document.getElementById("dislike");

    let likes = document.querySelectorAll(".liked").length;
    let dislikes = document.querySelectorAll(".disliked").length;

    likecounter.innerText = String(likes);
    dislikecounter.innerText = String(dislikes);
}

const laadMovies = () => {
    console.log("laadMovies");

    let movieList = document.getElementById("movielist");
    for(let i = 0; i<movies.length; i++){
        let movie = maakElement("div","movie");
        movie.setAttribute("id", movies[i].id);
        let title = maakElement("h3","title",movies[i].title);
        let description = maakElement("p","description",movies[i].description);
        let img = maakElement("img","img");
        img.setAttribute("src",movies[i].imageUrl);
        img.setAttribute("alt",movies[i].title);

        let buttons = maakElement("div","buttons");
        let likebutton = maakElement("i","fas fa-thumbs-up");
        likebutton.addEventListener("click", like);
        let dislikebutton = maakElement("i","fas fa-thumbs-down");
        dislikebutton.addEventListener("click", dislike);
        buttons.appendChild(likebutton);
        buttons.appendChild(dislikebutton);


        movie.appendChild(title);
        movie.appendChild(description);
        movie.appendChild(img);
        movie.appendChild(buttons);

        movieList.appendChild(movie);
    }
}

const toonLikedMovies = () => {
    console.log("toonLikedMovies");
    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");
    likebarmovies.innerHTML = "";
    if(likedMovies.length > 0){
        likebar.style.visibility = "visible";
        for(let i = 0; i < likedMovies.length; i++) {
            let movieId = likedMovies[i];
            console.log(movieId);
            for(let j = 0; j < movies.length; j++) {
                // console.log(movies[j].title)
                if(String(movieId) === String(movies[j].id)){
                    let movie = maakElement("div");
                    movie.setAttribute("id", movieId);
                    let title = maakElement("h3", "",movies[j].title);
                    let trash = maakElement("i", "fas fa-trash");
                    trash.addEventListener("click", verwijder);

                    console.log("toegevoegd", movies[j].title)
                    movie.appendChild(title);
                    movie.appendChild(trash);
                    likebarmovies.appendChild(movie);
                }
            }
        }

    } else {
        likebar.style.visibility = "hidden";
    }
    likeDislikeCounter();
}

const verwijder = (event) => {
    console.log("verwijder")
    let target = event.target;
    let movieId = target.parentElement.id;
    console.log(likedMovies);

    for(let i = 0; i<likedMovies.length; i++){
        console.log(likedMovies[i]);
        if(movieId === likedMovies[i]){
            likedMovies.splice(i, 1);
        }
    }

    //proberen om de like ook te verwijderen
    let movie = document.querySelectorAll(".movie");
    for(let i = 0; i<movie.length; i++){
            if(movieId === movie[i].id){
                movie[i].querySelectorAll(".liked")[0].classList.toggle("liked");

        }
    }
    toonLikedMovies();
}

const like = (event) => {
    console.log("like");
    let target = event.target;
    target.classList.toggle("liked");

    //Ophalen van het dislikebutton element
    let buttons = target.parentElement;
    let disliked = buttons.querySelector(".disliked");

    if(disliked){
        disliked.classList.toggle("disliked");
    }

    let movie = target.parentElement.parentElement;

    if(target.classList.contains("liked")) {
        if (!likedMovies.includes(movie.id)) {
            likedMovies.push(movie.id);
        }
    } else {
        for (let i = 0; i < likedMovies.length; i++) {
            if (likedMovies[i] === movie.id) {
                likedMovies.splice(i, 1);
            }
        }
    }
    console.log(likedMovies);
    toonLikedMovies();
    likeDislikeCounter();
}

const dislike = (event) => {
    console.log("dislike");
    let target = event.target;
    target.classList.toggle("disliked");

    //ophalen van het likebuttonelement
    let buttons = target.parentElement;
    let liked = buttons.querySelector(".liked");

    if(liked){
        liked.classList.toggle("liked");
        let movie = target.parentElement.parentElement;
        for(let i = 0; i<likedMovies.length; i++){
            if(likedMovies[i] === movie.id){
                likedMovies.splice(i,1);
            }
        }
    }
    console.log(likedMovies);
    toonLikedMovies();
    likeDislikeCounter();
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

window.addEventListener('load', setup);
