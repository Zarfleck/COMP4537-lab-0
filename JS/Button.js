// ChatGPT was used for assistance with this file

export class Button {

    constructor(number, colour, width, height, clickHandler = null) {
        this.number = number;
        this.btn = document.createElement("button");
        this.btn.style.background = colour;
        this.btn.style.width = width;
        this.btn.style.height = height;
        
        this.clickHandler = (() => {
            console.log(`Button ${this.number} clicked!`);
        });
    }

    setLocation(top, left) {
        this.btn.style.position = "fixed";
        this.btn.style.top = top;
        this.btn.style.left = left;
    }

    enableButton() {
        this.btn.addEventListener("click", this.clickHandler);
    }

    disableButton() {
        this.btn.removeEventListener("click", this.clickHandler);
    }

    hideNumber() {
        this.btn.innerHTML = "";
    }
    
    showNumber() {
        this.btn.innerHTML = this.number;
    }
}