export default class Games{
    #content = document.getElementById('games');
    
    show() {
        this.#content.classList.replace('d-none', 'd-block');
    }

    hide() {
        this.#content.classList.replace('d-block', 'd-none');      
    }
}