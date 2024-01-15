export default class Details{
    #details = document.getElementById('details');

    show() {
        this.#details.classList.replace('d-none', 'd-block');
    }

    hide() {
        this.#details.classList.replace('d-block', 'd-none');      
    }
}