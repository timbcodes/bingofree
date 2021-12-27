// Create our DOM variables
const drawOne = document.getElementById("draw_one");
const curNum = document.getElementById("current_num_text");
const newGame = document.getElementById("new_button");

// Add global counter variable
let theCount = 0;

// Create our arrays
let mainArry = [];
let drawArry = [];
let dispArry = [];

// Fill the main array on startup
const fillArry = () => {
    for (let i = 1; i <= 75; i++) {
        mainArry.push(i);
    }
};

fillArry();

// Create the function that draws a random number
const getBingoNum = () => {
    let drawNum = Math.floor(Math.random() * mainArry.length);
    let callNum = mainArry[drawNum];
    mainArry.splice(drawNum, 1);
    drawArry.push(callNum);
    return callNum;
};

// Add the letters to the number
const letNum = (n) => {
    let val;
    if (n <= 15) {
        val = "B";
    } else if (n > 15 && n <= 30) {
        val = "I";
    } else if (n > 30 && n <= 45) {
        val = "N";
    } else if (n > 46 && n <= 60) {
        val = "G";
    } else {
        val = "O";
    }
    return val;
};

// Create the functions that make the numbers display
const disCur = (n) => {
    let dispLet = letNum(n);
    curNum.innerText = `${dispLet}${n}`;
    return dispLet;
};

const lastFive = (n) => {
    if (dispArry.length < 5) {
        dispArry.push(n);
    } else {
        dispArry.shift();
        dispArry.push(n);
    }
};

const makeMid = () => {
    let lastFive = document.getElementById("last_five");
    let insider = "";
    lastFive.innerText = "";
    for (let i = 0; i < dispArry.length; i++) {
        let num = `${letNum(dispArry[i])}${dispArry[i]}`;
        insider += `${num} `;
    }
    lastFive.innerText = insider;
};

// Add our event listeners
drawOne.addEventListener("click", () => {
    if (mainArry.length) {
        let num = getBingoNum();
        disCur(num);
        lastFive(num);
        let changeNum = document.getElementById(`${num}`);
        let countMe = document.getElementById("total_num");
        changeNum.style.color = "#ff6721";
        theCount++;
        countMe.innerText = theCount;
        makeMid();
    }
});

newGame.addEventListener("click", () => {
    location.reload();
});