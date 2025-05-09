const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const main = document.querySelector("main");
const contentPage = document.querySelector(".page-content");

const movieTitle = document.querySelector("#movie-title");
const movieImage = document.querySelector("#movie-image");
const movieDescription = document.querySelector("#movie-description");
const movieDate = document.querySelector("#movie-date");
const movieCountry = document.querySelector("#movie-country");
const movieBudget = document.querySelector("#movie-budget");
const movieRuntime = document.querySelector("#movie-runtime");
const moviePopularity = document.querySelector("#movie-popularity");

fetch(`/data/${movie}`)
    .then(res => res.json())
    .then(data => {
        movieTitle.textContent = data.original_title
        movieImage.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`
        movieDescription.textContent = data.overview
        movieDate.textContent = data.release_date
        movieCountry.textContent = data.origin_country
        movieBudget.textContent = `${data.budget.toLocaleString('en-US')} $`
        movieRuntime.textContent = `${data.runtime} minuts`
        moviePopularity.textContent = data.popularity
    })
    .catch(err => {
        document.getElementById('data-container').innerText = 'Error loading data'
    })