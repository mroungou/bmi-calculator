const form = document.getElementById('calculator');
// get radio buttons
const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
// inputs divs
const ImperialInputsDiv = document.getElementsByClassName('imperial-sys');
const metricInputsDiv = document.getElementsByClassName('metric-sys');
// input values for metric
const weightKG = document.getElementById('weight-kg');
const heightCM = document.getElementById('height-cm');

// welcome and results div
const welcomeDiv = document.getElementById('welcome');
const resultsDiv = document.getElementById('results')

// input values for imperial
const weightStones = document.getElementById('weight-st');
const weightLBS = document.getElementById('weight-lbs');
const heightFT = document.getElementById('height-ft');
const heightIN = document.getElementById('height-in');

const BMIScore = document.getElementById('score');
let currentBMI

// calculating BMI
function calculateBMIMetric() {
    const weightValue = parseFloat(weightKG.value);
    const heightValue = parseFloat(heightCM.value);
    // span element that contains the number

    currentBMI = (weightValue / heightValue ** 2) * 10000;
    const currentBMIRounded = currentBMI.toFixed(1)
    BMIScore.innerText = currentBMIRounded;
}

function calculateBMIImperial () {
    const weightLBSValue = parseFloat(weightLBS.value);
    const weightStonesValue = parseFloat(weightStones.value);
    const heightFTValue = parseFloat(heightFT.value);
    const heightINValue = parseFloat(heightIN.value);

    const totalWeight = (weightStonesValue * 14) + weightLBSValue;
    const totalHeight = (heightFTValue * 12) + heightINValue;

    currentBMI = (totalWeight / totalHeight ** 2) * 703;
    const currentBMIRounded = currentBMI.toFixed(1);
    BMIScore.innerText = currentBMIRounded;
}

function displayMetric() {
    if (metricButton.checked == true) { //need to review this, may be useless
        for (let i = 0; i < metricInputsDiv.length; i++) {
            metricInputsDiv[i].classList.add('visible');
        }
        for (let i = 0; i < ImperialInputsDiv.length; i++) {
            ImperialInputsDiv[i].classList.remove('visible')
            ImperialInputsDiv[i].classList.add('hidden')
        }
    }
}

function displayImperial() {
    if (imperialButton.checked == true) { //need to review this, may be useless
        for (let i = 0; i < ImperialInputsDiv.length; i++) {
            ImperialInputsDiv[i].classList.add('visible');
        }
        for (let i = 0; i < metricInputsDiv.length; i++) {
            metricInputsDiv[i].classList.add('hidden');
            metricInputsDiv[i].classList.remove('visible');
        }
    }
}

imperialButton.addEventListener('click', displayImperial);
metricButton.addEventListener('click', displayMetric);

weightKG.addEventListener('keyup', calculateBMIMetric);
heightCM.addEventListener('keyup', calculateBMIMetric);

weightStones.addEventListener('keyup', calculateBMIImperial)
weightLBS.addEventListener('keyup', calculateBMIImperial)
heightFT.addEventListener('keyup', calculateBMIImperial)
heightIN.addEventListener('keyup', calculateBMIImperial)