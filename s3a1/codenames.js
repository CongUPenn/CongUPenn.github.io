var words = ["apple", "banana", "carrot", "grasshopper", "bubblefish", "rhino"];
var currentWord = "";
var gameStarted = false;
var outputElement = document.getElementById('output');
var coverElement = document.getElementById('cover');
var clues = []; // 保存所有线索的数组
var guess = [];

function getRandomWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function updateWordCard() {
    currentWord = getRandomWord();
    document.getElementById('wordCard').textContent = currentWord;
}

function startGame() {
    gameStarted = true;
    updateWordCard();
}

function submitClue() {
    var clue = document.getElementById('clueInput').value;

    if (!gameStarted) {
        outputElement.textContent = "Please start the game first.";
        return;
    }

    if (clue.trim() === "") {
        outputElement.textContent = "Please enter a clue.";
        return;
    }

    if(clue.includes("apple") || clue.includes("banana")||clue.includes("carrot") || clue.includes("grasshopper")||clue.includes("bubblefish") || clue.includes("rhino")){
        outputElement.textContent = "You spoiler!!!This round ends";
        return;
    }else{
        outputElement.textContent = "Team, your clue is: '" + clue + "'";
        clues.push(clue); // 将线索添加到数组
        displayClues(); // 显示所有线索
    
        // 清空输入框
        document.getElementById('clueInput').value = "";
    }
}

function guessWord() {
    var guessWord = document.getElementById('guessInput').value;

    if (!gameStarted) {
        outputElement.textContent = "Please start the game first.";
        return;
    }

    if(guessWord === currentWord){
        outputElement.textContent = "Mission completed!!!Another round?";
        return;
    }else{
        outputElement.textContent = "Try again";
        guess.push(guessWord); // 将线索添加到数组
        displayGuess(); // 显示所有线索
    
        // 清空输入框
        document.getElementById('guessInput').value = "";
    }
}


function displayClues() {
    // 在页面上显示所有线索
    var cluesList = document.getElementById('cluesList');
    cluesList.innerHTML = ""; // 清空先前的线索

    for (var i = 0; i < clues.length; i++) {
        var clueItem = document.createElement('li');
        clueItem.textContent = "Clue " + (i + 1) + ": " + clues[i];
        cluesList.appendChild(clueItem);
    }
}