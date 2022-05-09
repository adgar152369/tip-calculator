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

billInput.value = 0;
inputPeople.value = 1;

// event listeners for buttons and inputs
let billAmount, numPeople, customPercent, tipTotal, tipPerPerson, totalPerPerson;
let percentage = 0;

checkPercentageBoxes.forEach(percentBtn => {
    percentBtn.addEventListener('click', () => {  
        if (percentBtn.checked) {
            percentage = percentBtn.value * .01;
            console.log(percentage);
        }    
    })
});
customTipBtn.addEventListener('click', () => {
    customTipContainer.classList.toggle('toggle-custom-amount-container');
    customTipBtn.classList.toggle('toggle-selected');
});
billInput.addEventListener('keyup', () => {
    billAmount = Number(billInput.value);
});
inputPeople.addEventListener('change', () => {
    if (inputPeople.value == 0) {
        numPeople = inputPeople.value = 1;
    }
    numPeople = Number(inputPeople.value);
});

inputs.forEach(input => {
    input.addEventListener('change', () => {
        let tip = billAmount * percentage;
        let total = tip + billAmount;
        showTip.textContent = (tip / numPeople).toFixed(2);
        showTotal.textContent = (billAmount + tip / numPeople).toFixed(2);
    })
})



