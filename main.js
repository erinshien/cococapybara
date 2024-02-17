// Initialise meter variables
let fullness = 50;
let happiness = 50;
let energy = 50;

// Update meter values on the web page
function updateMeters() {
    document.getElementById("fullnessMeter").textContent = fullness;
    document.getElementById("happinessMeter").textContent = happiness;
    document.getElementById("energyMeter").textContent = energy;
}

updateMeters();

// Update mood message on the web page
function updateMood() {
    let mood = "";

    if (happiness <= 0 || fullness <= 0) {
        mood = "Coco is crying!";
    } else if (fullness >= 100 || energy === 0) {
        energy = 0;
        mood = "Coco needs to sleep.";
        setTimeout(() => {
            energy = 50;
            fullness = 50;
            happiness = 50;
            updateMeters();
            updateMood();
        }, 10000);
    } else {
        if (fullness < 40) {
            mood += "Coco is hungry"
        }
        if (happiness < 40) {
            if (mood !== "") {
                mood += " and ";
            }
            mood += "Coco is lonely";
        }
        if (energy < 40) {
            if (mood !== "") {
                mood += " and ";
            }
            mood += "Coco is tired";
        }
        mood = mood !== "" ? mood : "Coco is content";
    }

    document.getElementById("moodDisplay").textContent = mood;

}

updateMood();

// Function to feed Coco
function feed() {
    if (fullness < 100 && energy >= 10) {
        fullness += 10;
        energy -= 10;
    }
    if (fullness >= 100) {
        fullness = 100;
    }
    if (energy <= 0) {
        energy = 0;
    }
    updateMeters();
    updateMood();
}

// Function to play with Coco
function play() {
    if (happiness < 100 && fullness >= 10) {
        happiness += 10;
        fullness -= 10;
    }
    if (happiness >= 100) {
        happiness = 100;
    }
    if (fullness <= 0) {
        fullness = 0;
    }
    updateMeters();
    updateMood();
}

// Function to make Coco sleep
function sleep() {
    if (energy < 100 && fullness >= 10) {
        energy += 10;
        happiness -= 10;
    }
    if (energy >= 100) {
        energy = 100;
    }
    if (happiness <= 0) {
        happiness = 0;
    }
    updateMeters();
    updateMood();
}

function decreaseEnergy() {
    if (energy > 0) {
        energy -= 10;
    } else {
        clearInterval(timer);
    }
    updateMeters();
    updateMood();
}

const timer = setInterval(decreaseEnergy, 10000);

// Make feed, play, and sleep functions run when their respective buttons are clicked
document.getElementById("feedButton").addEventListener("click", feed);
document.getElementById("playButton").addEventListener("click", play);
document.getElementById("sleepButton").addEventListener("click", sleep);