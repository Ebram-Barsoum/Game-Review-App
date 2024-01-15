import Games from "./games.js";
import Details from "./details.js";
import Animation from "./animation.js";

const games = new Games();
const details = new Details();
const animation = new Animation();

export { games, details, animation };
    
export default class Display{

    display_games(games) {
        let content = document.querySelector('#cards .container .row'),
            box = '';
        
        for (let game of games) {
           
            game.platform = game.platform.split(' ').slice(0, 2).join(' ');

            box += `
                <div class="game p-3 col col-md-6 col-lg-4 col-xl-3" id=${game.id}>
                    <div class="card p-3 shadow-sm ">
                        <img src="${game.thumbnail}" alt="game image" class="w-100 rounded-2">
                        
                        <div class="card-body px-0 pb-0">
                            <h5 class="card-title d-flex justify-content-between gap-2">
                                <div class="text">${game.title}</div>
                                <button class="btn">Free</button>
                            </h5>
                            
                            <p class="card-text text-center text-secondary"> ${game.short_description}</p>
                            <hr>
                            <div class="tags d-flex justify-content-between ">
                                <div class="category bg-secondary px-2 rounded-2">${game.genre}</div>
                                <div class="type bg-secondary px-2 rounded-2">${game.platform}</div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        content.innerHTML = box;
        
    }

    display_details(game) {
        const gameDetails = document.querySelector('#details .container .row');
        gameDetails.innerHTML = `
                    <div class="details-image col-sm-12 col-lg-4 p-2">
                    <img src="${game.thumbnail}" alt="cover image of the game" class="w-100">
                    </div>

                    <div class="game-info col-sm-12 col-lg-8 px-4">
                        <h3 class="title">Title :${game.title}</h3>
                        <p>Category : <span class=" badge  ">${game.genre}</span></p>
                        <p>Platform : <span class=" badge  ">${game.platform}</span></p>
                        <p>Status : <span class=" badge  ">${game.status}</span></p>
                        
                        <p class="description my-4">${game.description}</p>

                        <a href="${game.game_url}" target="blank" class="more-btn btn text-white border-2">Show Game</a>
                    </div>
        `;
    }
}

