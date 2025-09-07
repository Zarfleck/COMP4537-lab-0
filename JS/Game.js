// ChatGPT was used for assistance with this file

import { Button } from "./Button.js";
import { Board } from "./Board.js";
import { userMessages } from "../lang/messages/en/user.js";



export class Game {
    constructor() {
        this.buttons = [];
        this.board = null;
        this.colours = ["blue", "red", "green", "yellow", "purple", "orange", "pink"];
        this.NUMBUTTONS = 0;
        this.clickedButton = 1
        this.gameStarted = false;
    }

    makeButtons() {
        for (let i = 1; i <= this.NUMBUTTONS; i++) {
            const clickHandler = (() => {
                this.handleButtonClick(i);
            });
            
            let button = new Button(i, this.colours[i], "10em", "5em", clickHandler);
            button.btn.innerHTML = i;
            button.btn.id = `button`;
            button.disableButton();
            
            const board_view = document.querySelector('.board');
            board_view.appendChild(button.btn);
            
            this.buttons.push(button);
        }
    }

    setBoard() {
        this.board = new Board(this.buttons);
    }

    handleButtonClick(buttonNumber) {
        if (buttonNumber == this.clickedButton) {
            this.buttons[buttonNumber - 1].showNumber();
            this.buttons[buttonNumber - 1].disableButton();
            this.clickedButton++
        } else {
            let endOutcome = document.getElementById("outcome")
            endOutcome.innerHTML = userMessages.loseMessage
            this.endGame();
            
        }

        if (this.clickedButton - 1 == this.NUMBUTTONS) {
            let endOutcome = document.getElementById("outcome")
            endOutcome.innerHTML = userMessages.winMessage
            this.endGame();
        }
    }

    endGame() {
        this.board.showAllButtons();
        const inputSection = document.querySelector('.input-section');
        inputSection.style.display = 'flex'
        return;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async countdown() {
        for (let i = this.NUMBUTTONS; i > 0; i--) {
            this.board.shuffle(this.buttons);
            await this.sleep(2000);
        }
        this.board.enableAllButtons();
        this.gameStarted = true;
    }
      
    

    start(numButtons) {
        this.NUMBUTTONS = numButtons;
        this.makeButtons();
        this.setBoard();

        setTimeout(() => {
            this.board.disableAllButtons();
            this.countdown();
        }, this.NUMBUTTONS * 1000);  
    }
}