
class BomHomework {
    constructor(){
        this.start();
    }

    start(){
        document.querySelector('.btn').addEventListener('click', this.modifyId.bind(this));
    }

    modifyId(){

        window.history.pushState({}, "", "#pagina2");
        this.toggleDisplay();
    }

    toggleDisplay() {
        document.querySelector('.first').classList.toggle('hidden');
        document.querySelector('.second').classList.toggle('hidden');
    }

}

var a = new BomHomework();

