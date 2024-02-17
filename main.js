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

function updateMood() {
    let mood = "";

    if (fullness < 100 && fullness >= 50 && happiness < 100 && happiness >= 50 && energy < 100 && energy >= 50) {
        mood = "Coco is content";
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
        if (happiness <= 0 || fullness <= 0) {
            mood = "Coco is crying!";
        }
        if (fullness >= 100 || energy === 0) {
            energy = 0;
            mood = "Coco needs to sleep.";
            setTimeout(() => {
                energy = 50;
                fullness = 50;
                happiness = 50;
                updateMeters();
                updateMood();
            }, 10000);
        }
    }

    document.getElementById("moodDisplay").textContent = mood;

}

// Function to feed Coco
function feed() {
    fullness += 10;
    energy -= 10;
    updateMeters();
    updateMood();
}

// Function to play with Coco
function play() {
    if (happiness < 100) {
            happiness += 10;
            fullness -= 10;
            updateMeters();
            updateMood();
        }
}

// Function to make Coco sleep
function sleep() {
    if (energy < 100) {
        energy += 10;
    happiness -= 10;
    updateMeters();
    updateMood();
    }
}
// Make feed, play, and sleep functions run when their respective buttons are clicked
document.getElementById("feedButton").addEventListener("click", feed);
document.getElementById("playButton").addEventListener("click", play);
document.getElementById("sleepButton").addEventListener("click", sleep);

// // Function to check meter levels
// function checkMeters() {
//     if (happiness <= 0 || fullness <= 0) {
//         console.log("Coco is crying!")
//     } else if (fullness >= 100) {
//         energy = 0;
//         console.log("Coco needs to sleep for 10 seconds.")
//         setTimeout(() => {
//             energy = 50;
//             fullness = 50;
//             console.log("Coco woke up.");
//         }, 10000);
//     }
// }


    // if (happiness === 100) {
    //     mood = "Coco is happy";
    // } else if (energy === 100) {
    //     if (mood !== "") {
    //         mood += " and ";
    //     }
    //     mood = "Coco is rested";
    // }