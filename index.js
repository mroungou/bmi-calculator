const form = document.getElementById('calculator');
// get radio buttons
const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
// inputs divs
const ImperialInputsDiv = document.getElementsByClassName('imperial-sys')
const metricInputsDiv = document.getElementsByClassName('metric-sys')


function displayMetric() {
    for (let i = 0; i < metricInputsDiv.length; i++) {
        metricInputsDiv[i].classList.add('visible');
    }
    for (let i = 0; i < ImperialInputsDiv.length; i++) {
        ImperialInputsDiv[i].classList.remove('visible')
        ImperialInputsDiv[i].classList.add('hidden')
    }
}

function displayImperial() {
    if (imperialButton.checked == true) {
        for (let i = 0; i < ImperialInputsDiv.length; i++) {
            ImperialInputsDiv[i].classList.add('visible');
        }
        for (let i = 0; i < metricInputsDiv.length; i++) {
            metricInputsDiv[i].classList.add('hidden');
            metricInputsDiv[i].classList.remove('visible');
        }
    }
}

imperialButton.addEventListener('click', displayImperial)
metricButton.addEventListener('click', displayMetric)