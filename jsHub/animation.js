export default class Animation {
    #animation = document.getElementById('animation');

    run() {
        this.#animation.classList.replace('d-none', 'd-block');
    }

    stop() {
        this.#animation.classList.replace('d-block', 'd-none');      
    }
}