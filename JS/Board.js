export class Board {
    constructor(buttons){
        this.buttons = buttons;
        this.arrayButtons = [];
    }

    enableAllButtons() {
        this.buttons.forEach(button => {
            button.enableButton();
            button.hideNumber();
        });
    }

    disableAllButtons() {
        this.buttons.forEach(button => {
            button.disableButton();
            button.hideNumber();
        })
    }

    showAllButtons() {
        this.buttons.forEach(button => {
            button.showNumber();
            button.disableButton();
        })
    }

    shuffle(buttons) {
        const buttonWidth = 240;
        const buttonHeight = 120;
        
        for (let i = 0; i < buttons.length; i++) {
            const maxX = window.innerWidth - buttonWidth;
            const maxY = window.innerHeight - buttonHeight;
            
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            buttons[i].setLocation(randomY + "px", randomX + "px");
        }
    }
}