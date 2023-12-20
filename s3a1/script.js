let currentScene = 1;

function startGame() {
    document.getElementById('scene' + currentScene).style.display = 'none';
    currentScene++;
    document.getElementById('scene' + currentScene).style.display = 'block';
}

function nextScene() {
    document.getElementById('scene' + currentScene).style.display = 'none';
    currentScene++;
    document.getElementById('scene' + currentScene).style.display = 'block';

    // Simulate Function Challenge
    if (currentScene === 2) {
        document.getElementById('functionChallenge').innerHTML = '<p>Code a function to add two numbers:</p>';
        document.getElementById('functionChallenge').innerHTML += '<code>function addNumbers(a, b) { return a + b; }</code>';
    }
}

function processChoice() {
    const chosenNumber = document.getElementById('chosenNumber').value;
    // Simulate Chance Outcome
    alert(`You chose ${chosenNumber}. Get ready for function challenges!`);
    nextScene();
}

function endGame() {
    alert('Congratulations! You completed the coding adventure.');
    // You can add additional actions or reset the game here
}


//////

function chooseOption(option) {
    var outputElement = document.getElementById('output');

    if (option === 'A') {
        // If option A is selected, display "AH AH AH AH"
        outputElement.textContent = 'AH AH AH AH';
    } else if (option === 'B') {
        // If option B is selected, display a bee text art
        outputElement.innerHTML = '<pre>' +
                                  '  /""""""\\   \n' +
                                  '  | (o) (o) |\n' +
                                  '  C         _) \n' +
                                  '   \\    ,___/\n' +
                                  '    \\______/\n' +
                                  '</pre>';
    }
}

///
function runCode() {
    var code = document.getElementById('code').value;
    var outputElement = document.getElementById('output');
    
    // Simulate the execution of the code (simplified for demonstration)
    if (code.includes("OUTBOX") && code.includes("INBOX")) {
        outputElement.textContent = "Congratulations! You completed the level!";
    } else {
        outputElement.textContent = "Your code is incorrect. Try again!";
    }
}

///

var codeInput = document.getElementById('code');

function appendToCode(command) {
    codeInput.value += command + '\n';
}

function runCode() {
    var code = codeInput.value;
    var outputElement = document.getElementById('output');

    // Simulate the execution of the code (simplified for demonstration)
    if (code.includes("OUTBOX") && code.includes("INBOX")) {
        outputElement.textContent = "Actors, well done! You completed the challenge!";
    } else {
        outputElement.textContent = "Actors, your code is incorrect. Try again!";
    }
}


