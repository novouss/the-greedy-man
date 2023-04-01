
document.addEventListener("DOMContentLoaded", function() {
    const lines = JSON.parse(localStorage.getItem('lines'));
    const startButton = document.querySelector('#start-button');
    nextButton = document.querySelector('#next-button');
    const transparentTextBox = document.querySelector('#transparent-textbox');

    startButton.addEventListener('click', function() {
        const guess = transparentTextBox.textContent.toUpperCase();
        transparentTextBox.textContent = "";
        guessWord(guess);
    })

    nextButton.addEventListener('click', function() {
        count++;

        if (count >= lines.length) {
            window.location.href = "base.html";
        }

        createRound(count, lines[count]);
    })

    count = 0;
    createRound(count, lines[count]);
});

function createRound(count, line) {
    
    word = line.toUpperCase().split("");
    hidden = [];
    
    nextButton.style.display = 'none';


    for (let i = 0; i < word.length; i++) {
        if (isAlpha(word[i])) {
            hidden.push("*");
            continue;
        }

        hidden.push(word[i]);
    }

    updateBoard(hidden);
    updateRound(count);
}

function guessWord(guess) {
    user = guess.split("");

    for (let i = 0; i < user.length; i++) {
        let char = user[i];

        for (let j = 0; j < word.length; j++) {
            if (char === word[j]) {
                hidden[j] = word[j];
            }
        }
    }

    if (combineChar(word) == combineChar(hidden)) {
        nextButton.style.display = 'block';
        nextButton.style.borderColor = '#02d661';
        nextButton.style.color = '#02d661';
    }

    updateBoard(hidden);
}

function updateBoard(text) {
    document.getElementById("board").textContent = combineChar(text);
}

function updateRound(round) {
    document.getElementById("round-counter").textContent = "Round " + (round + 1);
}

function isAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

function combineChar(a) {
    let result = "";
    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result
}