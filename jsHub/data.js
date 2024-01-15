import { games, details, animation } from './display.js';
import Display from "./display.js";


const display = new Display();

export default class Data {
     #URL;
    games = null;
    
     #options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f9e5a08cd5mshaa6024bf67b59d1p17b0bfjsnfdeced9f6a9a',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

    async #call_API() {
        let data;
        try {
            const response = await fetch(this.URL,this.#options);
            data = await response.json();
                
        } catch (error) {
            console.error(error);
        }

        return data;
    }

    get_games(callback, category = 'mmorpg') {
        games.hide();
        animation.run();
        this.URL = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&sort-by=release-date`;
        this.#call_API().then(data => {
            display.display_games(data);
            animation.stop();
            games.show();
            callback();
            
        });
    }

    get_details(gameId) {
        games.hide();
        animation.run();
        this.URL = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
        this.#call_API().then(data => {
            display.display_details(data);
            details.show();
            animation.stop();
        });    
    }
}

