import { Game } from "./Game.js";
import { userMessages } from "../lang/messages/en/user.js";


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gameTitle').textContent = userMessages.gameTitle;
    document.getElementById('inputTitle').textContent = userMessages.inputTitle;
    document.getElementById('numberInput').placeholder = userMessages.inputPlaceholder;
    document.getElementById('enterButton').textContent = userMessages.enterButton;
    const numberInput = document.getElementById('numberInput');
    const enterButton = document.getElementById('enterButton');

    enterButton.addEventListener('click', function() {
        const inputValue = numberInput.value;
        if(inputValue >= 3 && inputValue <=7) {
            const inputSection = document.querySelector('.input-section');
            inputSection.style.display = 'none';

            let board_view = document.querySelector('.board');
            board_view.innerHTML = '';

            let outcome = document.getElementById("outcome");
            outcome.innerHTML = '';

            let game = new Game();
            game.start(inputValue);
        }
    });
});

