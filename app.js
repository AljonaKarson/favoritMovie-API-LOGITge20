const container = document.querySelector(".conteiner");

// get data from server

const url = "https://api.themoviedb.org/3/movie/550?api_key=46d9c04c692df17e4d9d292c8a8e0205"

fetch(url)
.then(response => {
    return response.json()
}   )
.then(data => {
    console.log(data);
    console.log(data.overview);
    

    //format date to get a year
    let year = new Date(data.relase_date).getFullYear();
    console.log(year);
    let imagePath = data.poster_path;
    let imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+imagePath;
    console.log(imageUrl);
 let movieTitle = document.createElement("h1");
 movieTitle.textContent = data.title;
 container.appendChild(movieTitle);

 let overview = document.createElement("p");
 overview.textContent = data.overview;
 container.appendChild(overview);

 // create image
 let moviePoster = document.createElement(`img`);
 moviePoster.src = imageUrl;
 container.appendChild(moviePoster);

});