const form = document.getElementById('calculator');
// get radio buttons
const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
// inputs divs
const ImperialInputsDiv = document.getElementsByClassName('imperial-sys');
const metricInputsDiv = document.getElementsByClassName('metric-input');
// input values for metric
const weightKG = document.getElementById('weight-kg');
const heightCM = document.getElementById('height-cm');

// welcome and results div
const welcomeMessageDiv = document.getElementById('welcome');
const resultsCalculatedDiv = document.getElementById('bmi-calculated-results')

// input values for imperial
const weightStones = document.getElementById('weight-st');
const weightLBS = document.getElementById('weight-lbs');
const heightFT = document.getElementById('height-ft');
const heightIN = document.getElementById('height-in');

const BMIScore = document.getElementById('score');
let currentBMI;
const classification = document.getElementById('classification')

function BMIClassification(BMI) {
    if (BMI < 18.5) {
        classification.innerText = 'underweight'
    } else if (BMI >= 25 && BMI < 30) {
        classification.innerText = 'overweight'
    } else if (BMI >= 30) {
        classification.innerText = 'obese'
    } else {
        classification.innerText = 'a healthy weight'
    }
}
// calculating BMI
function calculateBMI() {
    const errorMessageDiv = document.getElementById('error')
    errorMessageDiv.innerText = '';
    if (metricButton.checked) {
        const weightValue = parseFloat(weightKG.value);
        const heightValue = parseFloat(heightCM.value);
        // span element that contains the number

        if (isNaN(weightValue) || isNaN(heightValue)) {
            errorMessageDiv.innerText = 'Please enter valid inputs';
            return;
        }
        currentBMI = (weightValue / (heightValue / 100) ** 2);
        const currentBMIRounded = currentBMI.toFixed(1)
        BMIScore.innerText = currentBMIRounded;
        BMIClassification(currentBMIRounded)
    } else if (imperialButton.checked) {
        const weightLBSValue = parseFloat(weightLBS.value);
        const weightStonesValue = parseFloat(weightStones.value);
        const heightFTValue = parseFloat(heightFT.value);
        const heightINValue = parseFloat(heightIN.value);

        const totalWeight = (weightStonesValue * 14) + weightLBSValue;
        const totalHeight = (heightFTValue * 12) + heightINValue;

        if (isNaN(weightLBSValue) || isNaN(weightStonesValue) || isNaN(heightFTValue) || isNaN(heightINValue)) {
            errorMessageDiv.innerText = 'Please enter all fields';
            return;
        }

        currentBMI = (totalWeight / totalHeight ** 2) * 703;
        const currentBMIRounded = currentBMI.toFixed(1);
        BMIScore.innerText = currentBMIRounded;
        BMIClassification(currentBMIRounded)
    }
}

function calculateIdealWeight() {
    if (imperialButton.checked) {
        const rangeDiv = document.getElementById('range');
    
        const heightFTValue = parseFloat(heightFT.value)
        const heightINValue = parseFloat(heightIN.value)
    
        const totalHeight = (heightFTValue * 12) + heightINValue;
    
        const lowerBound = (18.5 * (totalHeight ** 2)) / 703;
        const upperBound = (24.9 * (totalHeight ** 2)) / 703;
    
        const lowerBoundStones = Math.floor(lowerBound / 14);
        const lowerBoundLBS = Math.round(lowerBound % 14)
    
        const upperBoundStones = Math.floor(upperBound / 14);
        const upperBoundLBS = Math.round(upperBound % 14)
    
        rangeDiv.innerText = `${lowerBoundStones}st ${lowerBoundLBS}lbs - ${upperBoundStones}st ${upperBoundLBS}lbs`;
    } else if (metricButton.checked) {
        const heightValue = parseFloat(heightCM.value);
        const rangeDiv = document.getElementById('range');
    
        const lowerBoundKG = Math.round((18.5 * (heightValue / 100) ** 2) * 10) / 10;
        const upperBoundKG = Math.round((24.9 * (heightValue / 100)** 2) * 10) /10;
    
        rangeDiv.innerText = `${lowerBoundKG}kgs - ${upperBoundKG}kgs`;
    }
}

function displaySystemInputs() {
    if (imperialButton.checked) {
        for (let i = 0; i < ImperialInputsDiv.length; i++) {
            ImperialInputsDiv[i].classList.add('visible');
        }
        for (let i = 0; i < metricInputsDiv.length; i++) {
            metricInputsDiv[i].classList.remove('visible');
            metricInputsDiv[i].classList.add('hidden');
        }
    } else if (metricButton.checked) {
        for (let i = 0; i < metricInputsDiv.length; i++) {
            metricInputsDiv[i].classList.add('visible');
        }
        for (let i = 0; i < ImperialInputsDiv.length; i++) {
            ImperialInputsDiv[i].classList.remove('visible')
            ImperialInputsDiv[i].classList.add('hidden')
        }
    }
}

function displayResults() {
    welcomeMessageDiv.classList.add('hidden');
    resultsCalculatedDiv.classList.add('visible');
}

function performCalculations() {
    displayResults()
    calculateBMI()
    calculateIdealWeight()
}

imperialButton.addEventListener('click', displaySystemInputs);
metricButton.addEventListener('click', displaySystemInputs);

weightKG.addEventListener('keyup', performCalculations);
heightCM.addEventListener('keyup', performCalculations);

weightStones.addEventListener('keyup', performCalculations)
weightLBS.addEventListener('keyup', performCalculations)
heightFT.addEventListener('keyup', performCalculations)
heightIN.addEventListener('keyup', performCalculations)