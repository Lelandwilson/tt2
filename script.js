// Import text sets from external file
import { wordSets, sentenceSets, paragraphSets } from './text-sets.js';

const gameTypeSelect = document.getElementById('game-type');
const difficultySelect = document.getElementById('difficulty');
const durationSelect = document.getElementById('duration');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const typingArea = document.getElementById('typingArea');
const keyboardContainer = document.getElementById('keyboard');
const resultsDiv = document.getElementById('results');
const accuracySpan = document.getElementById('accuracy');
const correctCountSpan = document.getElementById('correctCount');
const incorrectCountSpan = document.getElementById('incorrectCount');
const timerDisplay = document.getElementById('timer');

let currentText = '';
let textIndex = 0;
let correctKeystrokes = 0;
let incorrectKeystrokes = 0;
let gameActive = false;
let startTime;
let timerInterval;
let gameDuration = 0;
let typedText = '';

const keyMap = {
    "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
    "q": "Q", "w": "W", "e": "E", "r": "R", "t": "T", "y": "Y", "u": "U", "i": "I", "o": "O", "p": "P", "[": "{", "]": "}", "\\": "|",
    "a": "A", "s": "S", "d": "D", "f": "F", "g": "G", "h": "H", "j": "J", "k": "K", "l": "L", ";": ":", "'": "\"",
    "z": "Z", "x": "X", "c": "C", "v": "V", "b": "B", "n": "N", "m": "M", ",": "<", ".": ">", "/": "?"
};

function generateText(gameType, difficulty) {
    switch (gameType) {
        case 'key':
            return generateKeysText(difficulty);
        case 'word':
            return generateWordsText(difficulty);
        case 'sentence':
            return generateSentenceText(difficulty);
        case 'paragraph':
            return generateParagraphText(difficulty);
        default:
            return '';
    }
}

function generateKeysText(difficulty) {
    let chars;
    let length = 100;
    
    switch (difficulty) {
        case 'easy':
            // Home row keys (easier)
            chars = ['a', 's', 'd', 'f', ' ', 'j', 'k', 'l', ';'];
            break;
        case 'medium':
            // Home row + top row
            chars = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ' '];
            break;
        case 'hard':
            // All keys including symbols
            chars = "abcdefghijklmnopqrstuvwxyz;'/., []`1234567890-=";
            length = 150;
            break;
        default:
            chars = ['a', 's', 'd', 'f', ' ', 'j', 'k', 'l', ';'];
    }
    
    return generateRandomChars(chars, length);
}

function generateWordsText(difficulty) {
    const words = wordSets[difficulty] || wordSets.easy;
    const selectedWords = [];
    
    // Select 10-15 random words from the set
    const numWords = difficulty === 'hard' ? 10 : (difficulty === 'medium' ? 12 : 15);
    
    for (let i = 0; i < numWords; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        selectedWords.push(randomWord);
    }
    
    return selectedWords.join(' ');
}

function generateSentenceText(difficulty) {
    const sentences = sentenceSets[difficulty] || sentenceSets.easy;
    
    // Select 1-3 random sentences depending on difficulty
    const numSentences = difficulty === 'hard' ? 1 : (difficulty === 'medium' ? 2 : 3);
    const selectedSentences = [];
    
    for (let i = 0; i < numSentences; i++) {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        selectedSentences.push(sentences[randomIndex]);
    }
    
    return selectedSentences.join(' ');
}

function generateParagraphText(difficulty) {
    const paragraphs = paragraphSets[difficulty] || paragraphSets.easy;
    
    // Select a random paragraph
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
}

function generateRandomChars(chars, length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function displayCurrentText() {
    typingArea.innerHTML = '';
    
    for (let i = 0; i < currentText.length; i++) {
        const span = document.createElement('span');
        span.textContent = currentText[i];
        
        if (i < textIndex) {
            span.classList.add('correct');
        } else if (i === textIndex) {
            span.classList.add('current');
            
            // Highlight the key that should be pressed next
            if (gameActive) {
                highlightNextKey(currentText[i]);
            }
        }
        
        typingArea.appendChild(span);
    }
}

// Function to highlight the next key to be pressed
function highlightNextKey(key) {
    // Remove any existing next-key highlights
    document.querySelectorAll('.key-next').forEach(el => {
        el.classList.remove('key-next');
    });
    
    let keyElements = [];
    const isUpperCase = key === key.toUpperCase() && key.toLowerCase() !== key.toUpperCase();
    
    // For uppercase letters, we need to highlight shift and the lowercase key
    if (isUpperCase && key.length === 1) {
        // Find shift keys
        const shiftKeys = document.querySelectorAll('[data-key="Shift"]');
        shiftKeys.forEach(el => {
            el.classList.add('key-next');
        });
        
        // Find the lowercase key
        key = key.toLowerCase();
    }
    
    // Try to find by data-key attribute
    keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    
    // If not found by data-key, try other methods
    if (keyElements.length === 0) {
        // Try to find by content
        if (key.length === 1) {
            const keyChar = key.toUpperCase();
            keyElements = Array.from(document.querySelectorAll('.key')).filter(
                el => el.textContent.trim().toUpperCase() === keyChar
            );
        }
    }
    
    // Add the key-next class to highlight the key
    if (keyElements.length > 0) {
        keyElements.forEach(elem => {
            elem.classList.add('key-next');
        });
    }
}

function highlightKey(key) {
    let keyElements = [];
    const isUpperCase = key.length === 1 && key === key.toUpperCase() && key.toLowerCase() !== key.toUpperCase();
    const isSpecial = key.length === 1 && Object.values(keyMap).includes(key);
    
    // Handle uppercase letters and special characters that require shift
    if (isUpperCase || isSpecial) {
        // Highlight shift keys
        const shiftKeys = document.querySelectorAll('[data-key="Shift"]');
        shiftKeys.forEach(el => {
            el.classList.add('active');
            setTimeout(() => {
                el.classList.remove('active');
            }, 100);
        });
        
        // For uppercase letters, find the lowercase key
        if (isUpperCase) {
            key = key.toLowerCase();
        }
        // For special characters, find the base key
        else if (isSpecial) {
            for (const [baseKey, special] of Object.entries(keyMap)) {
                if (special === key) {
                    key = baseKey;
                    break;
                }
            }
        }
    }
    
    // First try to find by data-key attribute
    keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    
    // If not found by data-key, try other methods
    if (keyElements.length === 0) {
        // Handle special keys
        if (key === ' ' || key === 'Space') {
            keyElements = document.querySelectorAll('.key-spacebar');
        } else if (key === 'Backspace' || key === 'Delete') {
            keyElements = document.querySelectorAll('.key-wide[data-key="Delete"]');
        } else if (key === 'Enter' || key === 'Return') {
            keyElements = document.querySelectorAll('[data-key="Enter"]');
        } else if (key === 'Tab') {
            keyElements = document.querySelectorAll('[data-key="Tab"]');
        } else if (key === 'CapsLock' || key === 'Caps') {
            keyElements = document.querySelectorAll('[data-key="CapsLock"]');
        } else if (key === 'Meta' || key === 'Command' || key === 'Cmd') {
            keyElements = document.querySelectorAll('[data-key="Meta"]');
        }
        // For regular keys, try by text content
        else if (key.length === 1) {
            const keyChar = key.toUpperCase();
            keyElements = Array.from(document.querySelectorAll('.key')).filter(
                el => el.textContent.trim().toUpperCase() === keyChar
            );
        }
    }
    
    // Highlight all matching key elements
    if (keyElements.length > 0) {
        keyElements.forEach(elem => {
            elem.classList.add('active');
            setTimeout(() => {
                elem.classList.remove('active');
            }, 100);
        });
    }
}

document.addEventListener('keydown', (event) => {
    if (!gameActive) return;

    const typedChar = event.key;
    const expectedChar = currentText[textIndex];

    // Prevent default behavior for Tab key to avoid focusing other elements
    if (typedChar === 'Tab') {
        event.preventDefault();
    }

    highlightKey(typedChar);

    if (typedChar === expectedChar) {
        correctKeystrokes++;
        textIndex++; // Move to the next character
        displayCurrentText(); // Update display after correct key press
    } else if (typedChar !== 'Shift' && typedChar !== 'Alt' && typedChar !== 'Control' && 
               typedChar !== 'Meta' && typedChar !== 'CapsLock' && typedChar !== 'Tab') {
        // Don't count modifier keys as errors
        incorrectKeystrokes++;
    }

    if (textIndex === currentText.length) {
        if (durationSelect.value === 'unlimited') {
            continueUnlimitedGame();
        } else {
            endGame();
        }
    }
});

function startGame() {
    const gameType = gameTypeSelect.value;
    const difficulty = difficultySelect.value;
    const duration = durationSelect.value;

    // Generate text based on game type and difficulty
    currentText = generateText(gameType, difficulty);
    
    // If no text was generated, use a default text
    if (!currentText || currentText.length === 0) {
        currentText = "The quick brown fox jumps over the lazy dog.";
        console.error("Failed to generate text for game type: " + gameType + " and difficulty: " + difficulty);
    }
    
    console.log("Game started with:", { gameType, difficulty, duration, textLength: currentText.length });
    
    textIndex = 0;
    correctKeystrokes = 0;
    incorrectKeystrokes = 0;
    typedText = '';
    gameActive = true;
    resultsDiv.style.display = 'none';
    stopButton.disabled = false;
    startButton.disabled = true;
    timerDisplay.textContent = '';

    // Show the text in the typing area
    displayCurrentText();

    if (duration !== 'free' && duration !== 'unlimited') {
        gameDuration = parseInt(duration);
        startTime = Date.now();
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    } else if (duration === 'unlimited') {
        timerDisplay.textContent = 'Unlimited Mode - Press ESC to stop';
    }
}

function stopGame() {
    if (gameActive) {
        endGame();
    }
}

function continueUnlimitedGame() {
    const gameType = gameTypeSelect.value;
    const difficulty = difficultySelect.value;
    
    // Generate new text but keep the current score
    currentText = generateText(gameType, difficulty);
    
    if (!currentText || currentText.length === 0) {
        currentText = "The quick brown fox jumps over the lazy dog.";
    }
    
    // Reset text index but keep keystroke counts for cumulative score
    textIndex = 0;
    
    // Show the new text while maintaining the game state
    displayCurrentText();
}

function updateTimer() {
    const timeLeft = gameDuration - Math.floor((Date.now() - startTime) / 1000);
    if (timeLeft <= 0) {
        endGame();
    } else {
        timerDisplay.textContent = `Time: ${timeLeft} seconds`;
    }
}

function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    stopButton.disabled = true;
    startButton.disabled = false;

    const totalKeystrokes = correctKeystrokes + incorrectKeystrokes;
    const accuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 0;

    accuracySpan.textContent = accuracy;
    correctCountSpan.textContent = correctKeystrokes;
    incorrectCountSpan.textContent = incorrectKeystrokes;
    resultsDiv.style.display = 'block';
}

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);

// Add event listener for Escape key to stop the game
document.addEventListener('keydown', (event) => {
    if (gameActive && event.key === 'Escape') {
        stopGame();
    }
});