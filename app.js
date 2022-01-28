// import functions and grab DOM elements
const buildingSelector = document.getElementById('building-selector');
const buildingImage = document.getElementById('building-img');

const mayorSelector = document.getElementById('mayor-selector');
const mayorImage = document.getElementById('mayor-img');

const pestSelector = document.getElementById('pest-selector');
const pestImage = document.getElementById('pest-img');

const results = document.getElementById('results');
const nameInput = document.getElementById('name-input');
const cityNameBtn = document.getElementById('name-btn');
const nameList = document.getElementById('name-list');
// add reset?
// let state
let cityNames = [];
let buildingCounter = 0;
let mayorCounter = 0;
let pestCounter = 0;

// set event listeners
buildingSelector.addEventListener('change', (e) => {
    const value = e.target.value;
    buildingImage.src = `./assets/building-${value}.jpg`;
    buildingCounter++;
    displayStats();
});

mayorSelector.addEventListener('change', (e) => {
    const value = e.target.value;
    mayorImage.src = `./assets/mayor-${value}.jpeg`;
    mayorCounter++;
    displayStats();
});

pestSelector.addEventListener('change', (e) => {
    const value = e.target.value;
    pestImage.src = `./assets/pest-${value}.jpg`;
    pestCounter++;
    displayStats;
});

function displayStats() {
    const countstring = createCountString(buildingCounter, mayorCounter, pestCounter);
    results.textContent = countString;
}
// get user input
// use user input to update state
// update DOM to reflect the new state
