let userScore = 0;
let compScore = 0;

// Array of random questions with answers

// English and Odia versions of questions/answers
const mquestions_en = [
    { q: "What is the unit of work in SI system?", a: "Joule" },
    { q: "What is the formula of the area of a trapezium?", a: "1/2 X (sum of parallel sides) X Height" },
    { q: "Name the gas used in the process of photosynthesis.", a: "Carbon Dioxide" },
    { q: "Who is known as the 'Napoleon of India'?", a: "Samudragupta" },
    { q: "What is the boiling point of water in Kelvin?", a: "373 K" },
];
const mquestions_or = [
    { q: "SI ପ୍ରଣାଳୀରେ କାମର ଏକକ କ'ଣ?", a: "ଜୌଲ୍" },
    { q: "ଟ୍ରାପେଜିଅମ୍ ର ଏରିଆ ର ସୂତ୍ର କ'ଣ?", a: "1/2 X (ସମାନାନ୍ତର ସାଇଡ୍ ମାନଙ୍କର ଯୋଗଫଳ) X ଉଚ୍ଚତା" },
    { q: "ଫୋଟୋସିନ୍ଥେସିସ୍ ପ୍ରକ୍ରିୟାରେ ବ୍ୟବହୃତ ଗ୍ୟାସ କ'ଣ?", a: "କାର୍ବନ୍ ଡାଇଅକ୍ସାଇଡ୍" },
    { q: "'ଭାରତର ନେପୋଲିଅନ୍' କିଏ?", a: "ସମୁଦ୍ରଗୁପ୍ତ" },
    { q: "ପାଣିର ଉବାଲିବା ତାପମାନ (କେଲଭିନ୍) କେତେ?", a: "373 K" },
];

const gkquestions_en = [
    { q: "What is the chemical formula of washing soda?", a: "Na2CO3·10H2O" },
    { q: "Who discovered the electron?", a: "J.J. Thomson" },
    { q: "What is the SI unit of force?", a: "Newton" },
    { q: "What is the value of acceleration due to gravity on Earth?", a: "9.8 m/s²" },
    { q: "Name the acid present in lemon.", a: "Citric Acid" },
    { q: "Which law of motion is also called the Law of Inertia?", a: "Newton's First Law" },
    { q: "What is the formula of Ohm's Law?", a: "V = IR" },
    { q: "Who was the first Mughal Emperor of India?", a: "Babur" },
    { q: "Who wrote the book 'Gitanjali'?", a: "Rabindranath Tagore" },
];
const gkquestions_or = [
    { q: "ଉଠା ଶୋଡାର ରସାୟନିକ ସୂତ୍ର କ'ଣ?", a: "Na2CO3·10H2O" },
    { q: "ଇଲେକ୍ଟ୍ରନ୍ କିଏ ଆବିଷ୍କାର କରିଥିଲେ?", a: "J.J. ଥମ୍ସନ୍" },
    { q: "ବଳର SI ଏକକ କ'ଣ?", a: "ନ୍ୟୁଟନ୍" },
    { q: "ପୃଥିବୀରେ ଗୁରୁତ୍ୱାକର୍ଷଣ ତ୍ୱରଣର ମୂଲ୍ୟ କେତେ?", a: "9.8 m/s²" },
    { q: "ଲେମନ୍ ରେ ଥିବା ଆମ୍ଲ କ'ଣ?", a: "ସିଟ୍ରିକ୍ ଆସିଡ୍" },
    { q: "କେଉଁ ଗତି ନିୟମକୁ ଅନ୍ୟ ନାମରେ ଅଜ୍ଞାନତା ନିୟମ କୁହାଯାଏ?", a: "ନ୍ୟୁଟନ୍ ର ପ୍ରଥମ ନିୟମ" },
    { q: "Ohm's Law ର ସୂତ୍ର କ'ଣ?", a: "V = IR" },
    { q: "ଭାରତର ପ୍ରଥମ ମୁଘଲ୍ ସାମ୍ରାଟ୍ କିଏ?", a: "ବାବର" },
    { q: "'ଗୀତାଞ୍ଜଳି' ପୁସ୍ତକ କିଏ ଲେଖିଥିଲେ?", a: "ରବୀନ୍ଦ୍ରନାଥ ଠାକୁର" },
];



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// English and Odia translations for UI/game text
const translations = {
    en: {
        'Stone Paper Scissors': 'Stone Paper Scissors',
        'Your-Score': 'Your-Score',
        'Computer-Score': 'Computer-Score',
        'Play Your Move': 'Play Your Move',
        'You reached 5 points! You win the game!': 'You reached 5 points! You win the game!',
        'Computer reached 5 points! You lose the game!': 'Computer reached 5 points! You lose the game!',
        'Game Was Draw': 'Game Was Draw',
        'You Win!': 'You Win!',
        'You Lost.': 'You Lost.',
        'beats': 'beats',
        'Game Over!': 'Game Over!',
        'Correct Answer:': 'Correct Answer:'
    },
    or: {
        'Stone Paper Scissors': 'ପଥର କାଘଜ କତରି',
        'Your-Score': 'ଆପଣଙ୍କର ସ୍କୋର',
        'Computer-Score': 'କମ୍ପ୍ୟୁଟର ସ୍କୋର',
        'Play Your Move': 'ଆପଣଙ୍କ ଚଳ କରନ୍ତୁ',
        'You reached 5 points! You win the game!': 'ଆପଣ ୫ ପଏଁଟ୍ ପ୍ରାପ୍ତ କରିଛନ୍ତି! ଆପଣ ଖେଳ ଜିତିଛନ୍ତି!',
        'Computer reached 5 points! You lose the game!': 'କମ୍ପ୍ୟୁଟର ୫ ପଏଁଟ୍ ପ୍ରାପ୍ତ କରିଛି! ଆପଣ ଖେଳ ହାରିଛନ୍ତି!',
        'Game Was Draw': 'ଖେଳ ଡ୍ର ହୋଇଛି',
        'You Win!': 'ଆପଣ ଜିତିଲେ!',
        'You Lost.': 'ଆପଣ ହାରିଲେ।',
        'beats': 'କୁ ହରାଇଲା',
        'Game Over!': 'ଖେଳ ସମାପ୍ତ!',
        'Correct Answer:': 'ସଠିକ୍ ଉତ୍ତର:'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    // Heading
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = translations[lang]['Stone Paper Scissors'];
    }
    // Score labels
    const scoreLabels = document.querySelectorAll('.score p:last-child');
    scoreLabels.forEach(p => {
        // Find the English key for this label
        let key = Object.keys(translations['en']).find(k => translations['en'][k] === p.textContent.trim() || translations['or'][k] === p.textContent.trim());
        if (key) {
            p.textContent = translations[lang][key];
        }
    });
    // Message
    const msg = document.querySelector('#msg');
    if (msg) {
        // Find the English key for this message
        let key = Object.keys(translations['en']).find(k => translations['en'][k] === msg.textContent.trim() || translations['or'][k] === msg.textContent.trim());
        if (key) {
            msg.textContent = translations[lang][key];
        }
    }
}


function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'or' : 'en');
}

// Attach event listeners to the language buttons after DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    const englishBtn = document.getElementById('englishBtn');
    const odiaBtn = document.getElementById('odiaBtn');
    if (englishBtn) {
        englishBtn.addEventListener('click', function() { setLanguage('en'); });
    }
    if (odiaBtn) {
        odiaBtn.addEventListener('click', function() { setLanguage('or'); });
    }
    setLanguage('en');
});

function checkGameOver() {
    if (userScore >= 5) {
        alert((currentLang === 'en' ? '🎉 ' + translations['en']['You reached 5 points! You win the game!'] : '🎉 ' + translations['or']['You reached 5 points! You win the game!']));
        disableGame();
    } else if (compScore >= 5) {
        alert((currentLang === 'en' ? '💻 ' + translations['en']['Computer reached 5 points! You lose the game!'] : '💻 ' + translations['or']['Computer reached 5 points! You lose the game!']));
        disableGame();
    }
}

function disableGame() {
    choices.forEach(choice => {
        choice.disabled = true; // disable buttons
    });
    msg.innerText = translations[currentLang]['Game Over!'];
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}

function askQuestion(arrType) {
    // arrType is either 'm' or 'gk'
    let arr_en = arrType === 'm' ? mquestions_en : gkquestions_en;
    let arr_or = arrType === 'm' ? mquestions_or : gkquestions_or;
    const arr = currentLang === 'en' ? arr_en : arr_or;
    const randomIndex = Math.floor(Math.random() * arr.length);
    const picked = arr[randomIndex];

    let userAnswer = prompt(picked.q);

    // Always show correct answer
    alert(translations[currentLang]['Correct Answer:'] + " " + picked.a);

    if (userAnswer && userAnswer.trim().toLowerCase() === picked.a.toLowerCase()) {
        userScore++;
    } else {
        userScore--;
    }
    userScorePara.innerText = userScore;

    checkGameOver();
}

const drawGame = () => {
    msg.innerText = translations[currentLang]['Game Was Draw'];
    msg.style.backgroundColor = "purple";
    askQuestion('m');
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `${translations[currentLang]['You Win!']} ${userChoice} ${translations[currentLang]['beats']} ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `${translations[currentLang]['You Lost.']} ${compChoice} ${translations[currentLang]['beats']} ${userChoice}`;
        msg.style.backgroundColor = "red";
        askQuestion('gk');
    }
    checkGameOver();
};

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    if (userScore >= 5 || compScore >= 5) return; // Stop further play if already ended

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "stone" ? true : false;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
    
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});








