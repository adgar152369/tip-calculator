// grab elements from DOM
const billInput = document.getElementById('bill-input');
const checkPercentageBoxes = document.querySelectorAll('.percentage');
const inputPercent = document.querySelector('#custom-amount');
const inputPeople = document.getElementById('people-input');
const inputs = document.querySelectorAll('input');
const customTipContainer = document.querySelector('.custom-amount-container');
const customTipBtn = document.querySelector('#custom-btn');
const showTip = document.querySelector('.tip-result');
const showTotal = document.querySelector('.total-result');
const resetBtn = document.querySelector('.reset');


// event listeners for buttons and inputs
let billAmount, numPeople, customPercent, tipTotal, tipPerPerson, totalPerPerson;
let percentage = 0;
billInput.value = "";

checkPercentageBoxes.forEach(percentBtn => {
    percentBtn.addEventListener('click', () => {
        if (percentBtn.checked) {
            percentage = percentBtn.value * .01;
        }
    })
});
customTipBtn.addEventListener('click', () => {
    customTipContainer.classList.toggle('toggle-custom-amount-container');
    customTipBtn.classList.toggle('toggle-selected');
});
billInput.addEventListener('keyup', () => {
    billAmount = Number(billInput.value);
    console.log(billAmount);
});
inputPeople.addEventListener('change', () => {
    if (inputPeople.value == 0) {
        numPeople = Number(inputPeople.value = 1);
    }
    numPeople = Number(inputPeople.value);
});

inputs.forEach(input => {
    input.addEventListener('change', () => {
        let tip = billAmount * percentage;
        let total = tip + billAmount;
        if (isNaN(tip) || percentage == 0) {
            showTip.textContent = 0;
            showTotal.textContent = billAmount;
            numPeople = 1;
        }
        else {
            showTip.textContent = "$" + (tip / numPeople).toFixed(2);
            showTotal.textContent = "$" + (total / numPeople).toFixed(2);
        }
    })
});

// reset inputs
resetBtn.addEventListener('click', () => {
    billInput.value = "";
    inputPeople.value = 1;
    showTip.textContent = "";
    showTotal.textContent = "";
})
