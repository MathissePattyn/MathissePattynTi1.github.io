// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.

let likedMovies = [];

const setup = () => {
    console.log("setup");
    laadFilms();
}

const laadFilms = () => {
    console.log("laadFilms");
    let movielist = document.getElementById("movielist");
    for(let i = 0; i < movies.length; i++) {
        let movie = maakElement("div","movie");
        let title = maakElement("h3","title",movies[i].title);
        title.setAttribute("id", movies[i].id);
        let description = maakElement("p","description",movies[i].description);

        let imgSource = maakElement("img","img");
        imgSource.setAttribute("src",movies[i].imageUrl);
        imgSource.setAttribute("alt",movies[i].title);
        movie.setAttribute("id",movies[i].id);

        let buttons = maakElement("div","buttons");
        let likeButton = maakElement("i","fas fa-thumbs-up");
        likeButton.addEventListener('click',like);
        let dislikeButton = maakElement("i","fas fa-thumbs-down");
        dislikeButton.addEventListener('click', dislike);
        buttons.appendChild(likeButton);
        buttons.appendChild(dislikeButton);

        movie.appendChild(title);
        movie.appendChild(description);
        movie.appendChild(imgSource);
        movie.appendChild(buttons)

        movielist.appendChild(movie);
    }
}

const like = (event) => {
    console.log("like");
    let target = event.target;
    let buttons = target.parentElement;
    let disliked = buttons.querySelector(".disliked");
    let movie = buttons.parentElement;
    let id = movie.getAttribute("id");

    //if disliked verwijder de style
    if(disliked) {disliked.classList.toggle("disliked")}
    if (!target.classList.contains("liked")) {
        likedMovies.push(id);
        target.classList.toggle("liked");
    } else {
        let index = likedMovies.findIndex(movie => movie.id === id);
        likedMovies.splice(index, 1);
        target.classList.toggle("liked");
    }
    countLikesAndDislikes();
}

const toonLikedMovies = () => {
    // console.log("toonLikedMovies")
    let likebar = document.getElementById("likebar");
    let likebarmovies = document.getElementById("likebarmovies");
    if(likedMovies.length > 0){
        likebar.style.visibility = "visible";
        likebarmovies.innerHTML = "";
        for(let i = 0; i < likedMovies.length; i++) {
            let id = likedMovies[i];
            //zoek de index van de film in d moviesJS, doe dit door behulp van de id's te vergelijken
            let index = movies.findIndex(movie => movie.id.toString() === id.toString());
            let title = movies[index].title;

            //Maak elementen aan en voeg hierbij een event listener toe bij de vuilbak, voor het verwijderen van de gelikete movie
            let titelElement = maakElement("h3","title",title);
            let container = maakElement("div");
            container.setAttribute("id", id);
            let vuilbak = maakElement("i", "fas fa-trash");
            vuilbak.addEventListener('click', verwijder);

            container.appendChild(titelElement);
            container.appendChild(vuilbak)
            likebarmovies.appendChild(container);
            }
        } else {
        likebar.style.visibility = "hidden";
    }
}

const verwijder = (event) => {
    console.log("Film verwijderd");
    let target = event.target;
    let container = target.parentElement;
    let id = container.getAttribute("id");
    let index = likedMovies.findIndex(movie => movie.id === id);
    likedMovies.splice(index, 1);
    let movies = document.querySelectorAll(".movie");
    for(let i = 0; i < movies.length; i++) {
        let idMovielist = movies[i].id;
        if(id === idMovielist){
            let likebutton = movies[i].querySelectorAll(".liked")[0];
            likebutton.classList.toggle("liked");
        }
    }
    countLikesAndDislikes();
}

const countLikesAndDislikes = () => {
    // console.log("countLikesAndDislikes");
    let aantalLikes = document.querySelectorAll(".liked").length;
    let aantalDislikes = document.querySelectorAll(".disliked").length;

    let like = document.getElementById("like");
    let dislike = document.getElementById("dislike");

    like.innerText = aantalLikes;
    dislike.innerText = aantalDislikes;

    toonLikedMovies();
}

const dislike = (event) => {
    console.log("dislike");
    let target = event.target;
    let buttons = target.parentElement;
    let liked = buttons.querySelector(".liked");
    let movie = buttons.parentElement;
    let id = movie.getAttribute("id");
    if(liked){
        target.classList.toggle("disliked");
        //verwijder de like style
        liked.classList.toggle("liked");

        //verwijder gelikete movie uit de array
        let index = likedMovies.findIndex(movieId => movieId === id);
        likedMovies.splice(index, 1);
    } else {
        target.classList.toggle("disliked");
    }
    countLikesAndDislikes();
}

const maakElement = (element, className ="", text ="") => {
    let e = document.createElement(element);
    if(className){
        className.split(" ").forEach(className => e.classList.add(className));
    }
    if(text){
        e.textContent = text;
    }
    return e;
}

window.addEventListener("load", setup)
