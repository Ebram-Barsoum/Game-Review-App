import Data from "./data.js";
import {games,details} from "./display.js";
const data = new Data();

// getting game id when it's clicked and pass to get_details function
function get_game_Id() {
   const games = document.querySelectorAll('.card');

    games.forEach((game) => {
        game.addEventListener('click', (e) => {
            const gameId = e.target.closest('.game').id;
            data.get_details(gameId);
        });
    });
    
}

// initializing the app
data.get_games(get_game_Id);

// handling chaning the category
let categories = document.querySelectorAll("#category");
categories.forEach((category) => {
    category.addEventListener('click', function (e) {
        const categoryToSearch = e.target.innerText.toLowerCase();
       
        categories.forEach((category) => {
            category.classList.remove('active');
        });
        e.target.classList.add('active');

        data.get_games(get_game_Id,categoryToSearch);
    });
});

// handling closing the game details
const detailsCloseBtn = document.getElementById('details-close-btn');
detailsCloseBtn.addEventListener('click', function () {
    details.hide();
    games.show();
});

// handling making the navbar fxed
const navbar = document.getElementById('navbar');
const content = document.getElementById('cards');

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    if (scrollY >= 220) {
        navbar.classList.add('fixed-top');
        navbar.classList.add('top-35');
        content.classList.add('pt-5');
    } else {
        navbar.classList.remove('fixed-top');
        navbar.classList.remove('top-35');
        content.classList.remove('pt-5');
    }
});

